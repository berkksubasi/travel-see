// Lodash
import {map} from 'lodash';
import React, {useState} from 'react';
import {ColorTokens} from 'tamagui';
import {isEmail} from 'validator';
// Common Lib.
import {
    ButtonGoBack,
    CircleIconButton,
    HeaderShown,
    ScreenContainer,
} from '@components';
// Constants
import {TEXT_OPTIONS} from '@constants';
import {SelectedInfo} from '@interfaces/selected-info';
import IContactInformations from '@interfaces/user/IContactInformations';
// UI Lib.
import {
    Button,
    Form,
    IKeyOfIcons,
    Input,
    Select,
    Stack,
    Text,
    TextArea,
    useForm,
    XStack,
    YStack,
} from '@ui';

// Select Type
interface ISelectType {
    title: string;
    name: string;
    icon: IKeyOfIcons;
    iconColor: ColorTokens;
    defaultOpen: boolean;
    size: string;
    defaultValue: string;
    items: {label: string; value: string}[];
}

const ContactUs = () => {
    const [messageLength, setMessageLength] = useState(0);
    const maxMessageLength = 100;
    const [selectedInfo, setSelectedInfo] = useState<SelectedInfo>({
        subject: '',
    });

    const handleInfoChange = (
        name: keyof SelectedInfo,
        value: string,
    ) => {
        setSelectedInfo((prevSelectedInfo) => ({
            ...prevSelectedInfo,
            [name]: value,
        }));
    };

    const info: ISelectType[] = [
        {
            title: 'Konu Seçiniz',
            name: 'subject',
            icon: 'TopicIcon',
            iconColor: '$grayscale600',
            defaultOpen: false,
            size: 'large',
            defaultValue: 'Konu Seçiniz',
            items: [
                'Konu Seçiniz',
                'Şikayet ve İhbar',
                'Uygulama ile İlgili',
                'Diğer',
            ].map((item) => ({
                label: item,
                value: item,
            })),
        },
    ];

    const form = useForm<IContactInformations>({});

    return (
        <ScreenContainer
            horizontalPadding={true}
            verticalPadding={0}
        >
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack gap={'$12'}>
                <Stack
                    width={'100%'}
                    alignItems={'center'}
                >
                    <CircleIconButton
                        variant="primary"
                        icon="SupportCustomIcon"
                        color="$white"
                    />
                    <Text
                        marginVertical={'$3'}
                        {...TEXT_OPTIONS.H4}
                    >
                        Bize Ulaşın
                    </Text>
                    <Text
                        textAlign={'center'}
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale600'}
                    >
                        Mümkün olan en iyi kullanıcı deneyimi için
                        müşterilerimizi her zaman destekliyoruz, her
                        türlü şikayet ve iyileştirmeyi buradan
                        gönderebilirsiniz.
                    </Text>
                </Stack>

                <Stack
                    width={'100%'}
                    gap={'$4'}
                    marginBottom={'$0.5'}
                >
                    {map(info, (info, index) => (
                        <Stack
                            width={'100%'}
                            alignItems={'center'}
                            justifyContent="space-between"
                            key={index}
                        >
                            <Select
                                size={'$heading4xl'}
                                triggerProps={{
                                    borderRadius: '$3',
                                }}
                                icon={info.icon}
                                defaultOpen={false}
                                items={info.items}
                                title={info.title}
                                value={info.name}
                                onValueChange={(value) => {
                                    console.log(value);
                                    handleInfoChange(
                                        info.name as keyof SelectedInfo,
                                        value,
                                    );
                                }}
                            />
                        </Stack>
                    ))}

                    <Form form={form}>
                        <Form.Field
                            name={'email'}
                            key={'Email'}
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen e-posta adresinizi giriniz',
                                },
                            }}
                        >
                            <Input
                                {...TEXT_OPTIONS.BodyMediumM}
                                size="large"
                                bg={'$transparent'}
                                leftIconName="MailIcon"
                                error={false}
                                placeholder="E-posta adresinizi giriniz"
                                onChange={() => {
                                    console.log(form.getValues());
                                }}
                            />
                        </Form.Field>
                    </Form>
                    <Form form={form}>
                        <Form.Field
                            name="message"
                            key={'Message'}
                            rules={{
                                required: {
                                    value: true,
                                    message:
                                        'Lütfen mesajınızı giriniz',
                                },
                            }}
                        >
                            <YStack
                                h={'$27'}
                                pb={'$4'}
                                pt={'$2.5'}
                                px={'$1'}
                                borderRadius={'$4'}
                                borderWidth={'$px'}
                                borderColor={'$grayscale200'}
                            >
                                <TextArea
                                    {...TEXT_OPTIONS.BodyMediumM}
                                    textAlignVertical="top"
                                    bg={'$transparent'}
                                    borderWidth={'$0'}
                                    placeholder="Mesajınızı Yazınız"
                                    maxLength={maxMessageLength}
                                    onChange={(text) => {
                                        setMessageLength(
                                            text.nativeEvent.text
                                                .length,
                                        );
                                    }}
                                />
                                <XStack
                                    justifyContent={'flex-end'}
                                    px={'$3'}
                                >
                                    <Text
                                        {...TEXT_OPTIONS.BodyRegularS}
                                        color={
                                            messageLength >=
                                            maxMessageLength
                                                ? '$error' // veya başka bir uyarı rengi
                                                : '$grayscale500'
                                        }
                                    >
                                        {messageLength}/
                                        {maxMessageLength}
                                    </Text>
                                </XStack>
                            </YStack>
                        </Form.Field>
                    </Form>
                </Stack>
                <Stack
                    width={'100%'}
                    marginTop={'$16'}
                >
                    <Button
                        variant="primary"
                        size="large"
                        onPress={() => {
                            console.log(
                                'Form Values:',
                                form.getValues(),
                            );
                            console.log('Selected Info:', {
                                subject: selectedInfo.subject,
                            });
                        }}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={'$white'}
                        >
                            Gönder
                        </Text>
                    </Button>
                </Stack>
            </YStack>
        </ScreenContainer>
    );
};

export default ContactUs;
