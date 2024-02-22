// Lodash
import {map} from 'lodash';
// React
import React, {useState} from 'react';
// React-Native
import {Dimensions} from 'react-native';
import {ColorTokens} from 'tamagui';
// Constants
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
// Common Components
import {
    ButtonGoBack,
    HeaderShown,
    ScreenContainer,
} from '@components';
import {ICarQrInformation} from '@interfaces';
// UI Lib.
import {
    Button,
    Form,
    IKeyOfIcons,
    Input,
    ScrollView,
    Select,
    Stack,
    Text,
    useForm,
    YStack,
} from '@ui';

interface ISelectType {
    label?: string;
    title?: string;
    valueType?: string;
    placeholder?: string;
    name: string;
    defaultOpen?: boolean;
    defaultValue?: string;
    items?: {label: string; value: string}[];
}

interface ISelectedType {
    [key: string]: string;
}

interface IButton {
    label?: string;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    mb?: string;
    borderColor?: ColorTokens;
    backgroundColor?: ColorTokens;
    iconAfter?: IKeyOfIcons;
    color: ColorTokens;
}

const buttons: IButton[] = [
    {
        label: 'Sonraki',
        variant: 'primary',
        size: 'large',
        iconAfter: 'ChevronRightIcon',
        color: '$white',
    },
    {
        label: 'İptal',
        borderColor: '$transparent',
        backgroundColor: '$background',
        variant: 'secondary',
        size: 'large',
        color: '$black',
    },
];

const ThirdPage = () => {
    const form = useForm<ICarQrInformation>({});
    const [selectedType, setSelectedType] =
        useState<ICarQrInformation>({
            carBrand: '',
            carSeries: '',
            carModel: '',
            carFuelType: '',
            carGearType: '',
            carStatus: '',
            carDamageStatus: '',
            carColor: '',
            carType: '',
            carHP: '',
            carDriveTrains: '',
            carSellerType: '',
            carTradeType: '',
        });

    const handleInfoChange = (name: string, value: string) => {
        setSelectedType((prevSelectedType) => ({
            ...prevSelectedType,
            [name]: value,
        }));
    };

    const type: ISelectType[] = [
        {
            title: 'Fiyat',
            label: 'Fiyat*',
            placeholder: 'Fiyat Giriniz',
            name: 'price',
            valueType: 'numeric',
        },

        {
            title: 'Sahip',
            label: 'Sahibi*',
            placeholder: 'Ad-Soyad',
            name: 'owner',
        },

        {
            label: 'Marka*',
            title: 'Marka Seçiniz',
            name: 'carBrand',
            defaultOpen: false,
            placeholder: 'Marka Seçiniz',
            items: ['Mercedes', 'Fiat', 'Audi', 'Citroen'].map(
                (item) => ({
                    label: item,
                    value: item,
                }),
            ),
        },

        {
            label: 'Seri*',
            title: 'Seri Seçiniz',
            name: 'carSeries',
            defaultOpen: false,
            placeholder: 'Seri Seçiniz',
            items: ['EQE', 'AMG', 'C', 'SL'].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            label: 'Model*',
            title: 'Model Seçiniz',
            placeholder: 'Model Giriniz',
            name: 'carModel',
            defaultOpen: false,
            items: ['Q2', 'A3', 'A4', 'A5'].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            title: 'Model yılı',
            label: 'Yıl*',
            placeholder: 'Yıl Giriniz',
            name: 'year',
            valueType: 'numeric',
        },

        {
            label: 'Yakıt Türü*',
            title: 'Yakıt Türü Seçiniz',
            name: 'carFuelType',
            defaultOpen: false,
            placeholder: 'Yakıt Türü Seçiniz',
            items: ['Benzin', 'Dizel', 'LPG', 'Elektrik'].map(
                (item) => ({
                    label: item,
                    value: item,
                }),
            ),
        },

        {
            label: 'Vites*',
            title: 'Vites Seçiniz',
            name: 'carGearType',
            defaultOpen: false,
            placeholder: 'Vites Seçiniz',
            items: ['Otomatik', 'Yarı Otomatik', 'Manuel'].map(
                (item) => ({
                    label: item,
                    value: item,
                }),
            ),
        },

        {
            label: 'Araç Durumu',
            title: 'Araç Durumu Seçiniz',
            name: 'carStatus',
            defaultOpen: false,
            placeholder: 'Araç Durumu Seçiniz',
            items: ['Sıfır', '2.El'].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            title: 'Kilometre',
            label: 'Km*',
            placeholder: 'Km Giriniz',
            name: 'km',
            valueType: 'numeric',
        },

        {
            label: 'Kasa Tipi*',
            title: 'Kasa Tipi Seçiniz',
            name: 'carType',
            defaultOpen: false,
            placeholder: 'Kasa Tipi Seçiniz',
            items: ['Hatchback', 'Sedan', 'SUV'].map((item) => ({
                label: item,
                value: item,
            })),
        },
        {
            label: 'Motor Gücü*',
            title: 'Motor Guçü Seçiniz',
            name: 'carHP',
            defaultOpen: false,
            placeholder: 'Motor Guçü Seçiniz',
            items: [
                '60Hp',
                '70Hp',
                '80Hp',
                '90Hp',
                '100Hp',
                '120Hp',
                '150Hp',
                '200Hp',
                '250Hp',
                '300Hp',
                '350Hp',
                '400Hp',
                '450Hp',
                '500Hp',
                '600Hp',
                '700Hp',
                '800Hp',
                '900Hp',
                '1000Hp',
            ].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            label: 'Çekiş*',
            title: 'Çekiş Seçiniz',
            name: 'carDriveTrains',
            defaultOpen: false,
            placeholder: 'Çekiş Seçiniz',
            items: ['Önden Çekiş', 'Arkadan İtiş'].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            label: 'Renk*',
            title: 'Renk Seçiniz',
            name: 'carColor',
            defaultOpen: false,
            placeholder: 'Renk Seçiniz',
            items: ['Kırmızı', 'Mavi', 'Sarı', 'Siyah'].map(
                (item) => ({
                    label: item,
                    value: item,
                }),
            ),
        },

        {
            label: 'Ağır Hasar Kayıtlı*',
            title: 'Ağır Hasar Kayıtlı',
            name: 'carDamageStatus',
            defaultOpen: false,
            placeholder: 'Ağır Hasar Kayıtlı',
            items: ['Evet', 'Hayır'].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            title: 'Plaka',
            label: 'Plaka*',
            placeholder: 'Plaka Giriniz',
            name: 'plate',
        },

        {
            label: 'Kimden*',
            title: 'Sahibinden, Galeriden',
            name: 'carSellerType',
            defaultOpen: false,
            placeholder: 'Kimden Seçiniz',
            items: ['Sahibinden', 'Galeriden'].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            label: 'Takas*',
            title: 'Takas Seçiniz',
            name: 'carTradeType',
            defaultOpen: false,
            placeholder: 'Takas Seçiniz',
            items: ['Evet', 'Hayır'].map((item) => ({
                label: item,
                value: item,
            })),
        },
    ];

    const getWindowHeight = Dimensions.get('window').height;

    const onSubmitLogin = async (data: ICarQrInformation) => {
        console.log(data);
        console.log('Selected Info:', {
            location: selectedType,
        });
    };

    console.log(type[0].title);

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown>
                <ButtonGoBack />
            </HeaderShown>
            <YStack
                alignItems={'center'}
                gap={'$4'}
            >
                <Text
                    {...TEXT_OPTIONS.H4}
                    color={'$grayscale900'}
                >
                    Araç bilgilerini Doldur
                </Text>
                <Text
                    textAlign={'center'}
                    {...TEXT_OPTIONS.BodyRegularL}
                    color={'$grayscale600'}
                >
                    Aracın hakkında TARAT’ının bilgilenmesini sağla.
                </Text>
            </YStack>

            <YStack
                my={'$9'}
                height={getWindowHeight - 380}
            >
                <ScrollView w={'100%'}>
                    <Form form={form}>
                        {map(type, (typeItem, index) => (
                            <YStack
                                key={index}
                                marginBottom={'$space.3'}
                            >
                                <Text
                                    paddingHorizontal={'$3.5'}
                                    alignSelf="baseline"
                                    color={'$grayscale500'}
                                    {...TEXT_OPTIONS.BodyMediumM}
                                >
                                    {typeItem.label}
                                </Text>
                                {typeItem.items?.length ?? 0 > 0 ? (
                                    <Select
                                        key={index}
                                        defaultOpen={false}
                                        items={typeItem.items}
                                        title={typeItem.title ?? ''}
                                        placeholder={
                                            typeItem.placeholder
                                        }
                                        triggerProps={{
                                            h: '$14',
                                            borderRadius: '$4',
                                        }}
                                        defaultValue={
                                            typeItem.defaultValue
                                        }
                                        onValueChange={(value) => {
                                            console.log(value);
                                            handleInfoChange(
                                                typeItem.name as keyof ICarQrInformation,
                                                value,
                                            );
                                        }}
                                    />
                                ) : (
                                    <Form.Field
                                        key={index}
                                        name={typeItem.name}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: `${typeItem.title} alanı boş bırakılamaz`,
                                            },
                                            onChange: () => {
                                                form.clearErrors(
                                                    typeItem.name as keyof ICarQrInformation,
                                                );
                                            },
                                        }}
                                    >
                                        <Input
                                            borderRadius={'$4'}
                                            paddingHorizontal={'$4'}
                                            height={'$14'}
                                            w={'100%'}
                                            size="large"
                                            bg={'$background'}
                                            placeholder={
                                                typeItem.placeholder
                                            }
                                            keyboardType={
                                                typeItem.valueType
                                                    ? typeItem.valueType
                                                    : 'default'
                                            }
                                        />
                                    </Form.Field>
                                )}
                            </YStack>
                        ))}
                    </Form>
                </ScrollView>
            </YStack>

            <YStack gap={'$2'}>
                {map(buttons, (button, index) => (
                    <Button
                        key={index}
                        variant={button.variant}
                        size={button.size}
                        width={'100%'}
                        marginBottom={button.mb}
                        borderColor={button.borderColor}
                        backgroundColor={button.backgroundColor}
                        iconAfter={button.iconAfter}
                        onPress={form.handleSubmit(onSubmitLogin)}
                    >
                        <Text
                            {...TEXT_OPTIONS.BodySemiBoldL}
                            color={button.color}
                        >
                            {button.label}
                        </Text>
                    </Button>
                ))}
            </YStack>
        </ScreenContainer>
    );
};

export default ThirdPage;
