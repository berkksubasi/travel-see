import APP_SHADOWS from "@constants/APP_SHADOWS"
import TEXT_OPTIONS from "@constants/TEXT_OPTIONS"
import { IKeyOfIcons, Icon, Text, XStack, YStack } from "@ui/primitives"

interface StatisticInfoCardProps {
    title: string;
    value: string;
    icon: IKeyOfIcons;
}

const StatiscticInfoCard = ({ title, value, icon }: StatisticInfoCardProps) => {
    return (
        <XStack
                    overflow="hidden"
                    paddingBottom={'$px'}
                    borderRadius={'$4'}
                >
                    <XStack
                        backgroundColor={'$white'}
                        borderRadius={'$4'}
                        width={'$40'}
                        justifyContent={'space-between'}
                        {...APP_SHADOWS.small}
                    >
                        <YStack
                            paddingLeft={'$4'}
                            paddingVertical={'$4'}
                            backgroundColor={'$white'}
                        >
                            <Text
                                {...TEXT_OPTIONS.BodyMediumM}
                                color={'$grayscale900'}
                            >
                                {title}
                            </Text>
                            <Text
                                lineHeight={'$heading5xl'}
                                fontSize={40}
                                color={'$primary'}
                            >
                                {value}
                            </Text>
                        </YStack>
                        <YStack
                            paddingTop={'$3'}
                            paddingRight={'$3'}
                        >
                            <Icon
                                name={icon}
                                fontSize={'$5'}
                                color="$grayscale300"
                            />
                        </YStack>
                    </XStack>
                </XStack>
    )
}
export default StatiscticInfoCard;