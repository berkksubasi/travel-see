import {useMemo} from 'react';
import {
    Adapt,
    Sheet,
    Select as TMSelect,
    useControllableState,
    useMedia,
} from 'tamagui';
import type {
    ListItemProps,
    SelectTriggerProps,
    SheetProps,
    SelectProps as TMSelectProps,
} from 'tamagui';
import {LinearGradient} from 'tamagui/linear-gradient';
import {IconButton} from '../../actions';
import {Divider} from '../../content';
import {useSafeAreaInsets} from '../../hooks';
import {
    Icon,
    IKeyOfIcons,
    Stack,
    Text,
    XStack,
    YStack,
} from '../../primitives';

export interface ISelectItem {
    label: string;
    value: string;
    leading?: ListItemProps['icon'];
}

export interface ISelectSection {
    items: ISelectItem[];
    title?: string;
}

export interface ISelectProps extends TMSelectProps {
    icon?: IKeyOfIcons;
    items?: ISelectItem[];
    sections?: ISelectSection[];
    sheetProps?: SheetProps;
    title: string;
    triggerProps?: SelectTriggerProps;
    placeholder?: string;
    renderTrigger?: (item?: ISelectItem) => JSX.Element;
}

function SelectSectionsContent({
    sections = [],
}: {
    sections?: ISelectSection[];
}) {
    const media = useMedia();
    return (
        <TMSelect.Viewport
            unstyled
            minWidth="$48"
            outlineWidth="$px"
            outlineColor="$neutral3"
            outlineStyle="solid"
            borderRadius="$3"
            overflow="hidden"
            elevate
            backgroundColor="$bg"
            padding="$1"
        >
            {sections?.map((section) => (
                <TMSelect.Group>
                    {section.title ? (
                        <TMSelect.Label asChild>
                            <Text
                                variant="$headingXs"
                                $md={{
                                    variant: '$headingSm',
                                    paddingVertical: '$2.5',
                                }}
                                paddingVertical="$1.5"
                                paddingHorizontal="$2"
                                color="$textSubdued"
                            >
                                {section.title}
                            </Text>
                        </TMSelect.Label>
                    ) : null}
                    {section.items.map((item, i) => (
                        <TMSelect.Item
                            index={i}
                            key={item.label}
                            value={item.value}
                            minHeight="auto"
                            backgroundColor="$transparent"
                            borderRadius="$2"
                            paddingVertical="$1.5"
                            paddingHorizontal="$2"
                            $md={{
                                paddingVertical: '$2.5',
                                paddingRight: 11,
                            }}
                            icon={item.leading}
                            justifyContent="flex-start"
                        >
                            <TMSelect.ItemText
                                flex={1}
                                $md={{
                                    fontSize: '$bodyLg',
                                    fontWeight: '$bodyLg',
                                    lineHeight: '$bodyLg',
                                }}
                                fontSize="$bodyMd"
                                fontWeight="$bodyMd"
                                lineHeight="$bodyMd"
                            >
                                {item.label}
                            </TMSelect.ItemText>

                            <TMSelect.ItemIndicator marginLeft="auto">
                                <Icon
                                    name="CheckLargeOutline"
                                    size="$4"
                                    color="$iconActive"
                                    {...(media.md && {
                                        name: 'CheckRadioSolid',
                                        size: '$6',
                                    })}
                                />
                            </TMSelect.ItemIndicator>
                        </TMSelect.Item>
                    ))}
                </TMSelect.Group>
            ))}
        </TMSelect.Viewport>
    );
}

function SelectItemsContent({
    items = [],
    native,
}: {
    items?: ISelectItem[];
    native?: TMSelectProps['native'];
}) {
    const media = useMedia();
    return (
        <TMSelect.Viewport
            unstyled
            minWidth="$48"
            outlineWidth="$px"
            outlineColor="$neutral3"
            outlineStyle="solid"
            borderRadius="$3"
            overflow="hidden"
            elevate
            backgroundColor="$bg"
            padding="$1"
        >
            <TMSelect.Group>
                {items.map((item, i) => (
                    <TMSelect.Item
                        index={i}
                        key={item.value}
                        value={item.value}
                        minHeight="auto"
                        backgroundColor="$transparent"
                        borderRadius="$2"
                        paddingVertical="$1.5"
                        paddingHorizontal="$2"
                        $md={{
                            paddingVertical: '$2.5',
                            paddingRight: 11,
                        }}
                        icon={item.leading}
                        justifyContent="flex-start"
                    >
                        <TMSelect.ItemText
                            flex={1}
                            $md={{
                                fontSize: '$bodyLg',
                                fontWeight: '$bodyLg',
                                lineHeight: '$bodyLg',
                            }}
                            fontSize="$bodyMd"
                            fontWeight="$bodyMd"
                            lineHeight="$bodyMd"
                        >
                            {item.label}
                        </TMSelect.ItemText>

                        <TMSelect.ItemIndicator marginLeft="auto">
                            <Icon
                                name="CheckLargeOutline"
                                size="$4"
                                color="$iconActive"
                                {...(media.md && {
                                    name: 'CheckRadioSolid',
                                    size: '$6',
                                })}
                            />
                        </TMSelect.ItemIndicator>
                    </TMSelect.Item>
                ))}
            </TMSelect.Group>
            {native ? (
                <YStack
                    position="absolute"
                    right={0}
                    top={0}
                    bottom={0}
                    alignItems="center"
                    justifyContent="center"
                    width="$8"
                    pointerEvents="none"
                >
                    <Icon
                        color="$iconSubdued"
                        name="ChevronDownSmallOutline"
                        fontSize="$5"
                    />
                </YStack>
            ) : null}
        </TMSelect.Viewport>
    );
}

export function Select({
    icon,
    items,
    sections,
    sheetProps,
    title = 'Title',
    open,
    defaultOpen,
    onOpenChange,
    triggerProps,
    value,
    defaultValue,
    onValueChange,
    renderTrigger,
    placeholder,
    ...props
}: ISelectProps) {
    const {bottom} = useSafeAreaInsets();

    const [isOpen, setOpen] = useControllableState({
        prop: open,
        defaultProp: !!defaultOpen,
        onChange: onOpenChange,
    });

    const [innerValue, setInnerValue] = useControllableState({
        prop: value,
        defaultProp: defaultValue || '',
        onChange: onValueChange,
    });

    const allItems = useMemo(
        () =>
            sections && sections.length > 0
                ? sections.reduce(
                      (result, item) => result.concat(item.items),
                      [] as ISelectItem[],
                  )
                : items,
        [sections, items],
    );

    const activeItem = useMemo(
        () => allItems?.find((item) => item.value === innerValue),
        [allItems, innerValue],
    );

    return (
        <Stack
            position="relative"
            width={'100%'}
        >
            <TMSelect
                disablePreventBodyScroll
                open={isOpen}
                onOpenChange={setOpen}
                value={innerValue}
                onValueChange={setInnerValue}
                {...props}
            >
                {renderTrigger ? (
                    <TMSelect.Trigger
                        icon={
                            <Icon
                                color="$iconSubdued"
                                name={icon}
                            />
                        }
                        unstyled
                        // backgroundColor="$transparent"
                        {...triggerProps}
                    >
                        {renderTrigger(activeItem)}
                    </TMSelect.Trigger>
                ) : (
                    <TMSelect.Trigger
                        unstyled
                        borderRadius="$2"
                        borderColor="$grayscale200"
                        borderWidth="$px"
                        paddingLeft="$1.5"
                        paddingRight="$2"
                        paddingVertical="$1.5"
                        backgroundColor="$transparent"
                        width={'100%'}
                        minHeight="auto"
                        justifyContent="space-between"
                        iconAfter={
                            // @todo OĞUZ ChevronDownSmallOutline sağdan boşluk kalıyor
                            <Icon
                                color="$iconSubdued"
                                name="ChevronDownSmallOutline"
                                height={24}
                                width={24}
                            />
                        }
                        {...triggerProps}
                    >
                        {icon && (
                            <Icon
                                color="$iconSubdued"
                                name={icon}
                                width={24}
                                height={24}
                            />
                        )}
                        <TMSelect.Value
                            placeholder={placeholder}
                            ml={icon ? '$2.5' : undefined}
                            unstyled
                            fontSize="$bodyLg"
                            fontWeight="$bodyLg"
                            color="$grayscale400"
                            flex={1}
                        />
                    </TMSelect.Trigger>
                )}

                <Adapt when="md">
                    <Sheet
                        native={Boolean(props.native)}
                        modal
                        dismissOnSnapToBottom
                        animation="quick"
                        {...sheetProps}
                    >
                        <Sheet.Frame unstyled>
                            <>
                                {/* header */}
                                <XStack
                                    borderTopLeftRadius="$6"
                                    borderTopRightRadius="$6"
                                    backgroundColor="$bg"
                                    marginHorizontal="$5"
                                    paddingHorizontal="$5"
                                    paddingVertical="$4"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <Text
                                        variant="$headingXl"
                                        color="$text"
                                    >
                                        {title}
                                    </Text>
                                    <IconButton
                                        icon="CrossedSmallOutline"
                                        variant="destructive"
                                        color="$white"
                                        w={'$6'}
                                        h={'$6'}
                                        padding="$0"
                                        size="small"
                                        hitSlop={{
                                            top: 8,
                                            left: 8,
                                            right: 8,
                                            bottom: 8,
                                        }}
                                        aria-label="Close"
                                        onPress={() => setOpen(false)}
                                    />
                                </XStack>
                                {/* divider */}
                                <YStack
                                    backgroundColor="$bg"
                                    marginHorizontal="$5"
                                    paddingHorizontal="$5"
                                >
                                    <Divider />
                                </YStack>
                                {/* content */}
                                <Sheet.ScrollView
                                    borderBottomLeftRadius="$6"
                                    borderBottomRightRadius="$6"
                                    backgroundColor="$bg"
                                    showsVerticalScrollIndicator={
                                        false
                                    }
                                    marginHorizontal="$5"
                                    marginBottom={bottom || '$5'}
                                >
                                    <YStack padding="$3">
                                        <Adapt.Contents />
                                    </YStack>
                                </Sheet.ScrollView>
                            </>
                        </Sheet.Frame>

                        <Sheet.Overlay
                            animation="quick"
                            enterStyle={{opacity: 0}}
                            exitStyle={{opacity: 0}}
                            backgroundColor="$bgBackdrop"
                        />
                    </Sheet>
                </Adapt>
                <TMSelect.Content zIndex={200000}>
                    <TMSelect.ScrollUpButton
                        alignItems="center"
                        justifyContent="center"
                        paddingVertical="$1"
                    >
                        <YStack zIndex={10}>
                            <Icon
                                color="$iconSubdued"
                                name="ChevronTopSmallOutline"
                                size="$5"
                            />
                        </YStack>

                        <LinearGradient
                            start={[0, 0]}
                            end={[0, 1]}
                            fullscreen
                            colors={['$bg', '$transparent']}
                            borderRadius="$3"
                        />
                    </TMSelect.ScrollUpButton>
                    {sections && sections.length > 0 ? (
                        <SelectSectionsContent sections={sections} />
                    ) : (
                        <SelectItemsContent
                            items={items}
                            native={props.native}
                        />
                    )}
                    <TMSelect.ScrollDownButton
                        alignItems="center"
                        justifyContent="center"
                        paddingVertical="$1"
                    >
                        <YStack zIndex={10}>
                            <Icon
                                name="ChevronDownSmallOutline"
                                size="$5"
                                color="$iconSubdued"
                            />
                        </YStack>

                        <LinearGradient
                            start={[0, 0]}
                            end={[0, 1]}
                            fullscreen
                            colors={['$transparent', '$bg']}
                            borderRadius="$3"
                        />
                    </TMSelect.ScrollDownButton>
                </TMSelect.Content>
            </TMSelect>
        </Stack>
    );
}
