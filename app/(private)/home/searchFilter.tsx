import {map} from 'lodash';
import React, {useState} from 'react';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {
    ButtonGoBack,
    HeaderShown,
    ScreenContainer,
} from '@components';
import {Button, Text, XStack, YStack} from '@ui';
import {ListItem, Select} from '@ui';

interface ISelectType {
    label?: string;
    title?: string;
    placeholder?: string;
    name?: string;
    defaultOpen?: boolean;
    defaultValue?: string;
    items?: {label: string; value: string}[];
}

interface ISelectedType {
    [key: string]: string;
}
const searchFilter = () => {
    const [selectedType, setSelectedType] = useState<ISelectedType>(
        {},
    );

    const handleInfoChange = (name: string, value: string) => {
        setSelectedType((prevSelectedType) => ({
            ...prevSelectedType,
            [name]: value,
        }));
    };

    const type: ISelectType[] = [
        {
            label: 'Kategori Seçiniz',
            title: 'Kategori Seçiniz',
            name: 'brand',
            defaultOpen: false,
            placeholder: 'Kategori Seçiniz',
            items: [
                'Otomobil',
                'Arazi,SUV & Pickup',
                'Motosiklet',
                'Ticari Araçlar',
                'Elektrikli Araçlar',
                'Ağır Vasıta',
                'Diğer',
            ].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            label: 'Sırala',
            title: 'Sırala',
            name: 'seri',
            defaultOpen: false,
            placeholder: 'Sırala',
            items: [
                'Beğeni Sayısına Göre(Önce en yüksek)',
                'Beğeni Sayısına Göre(Önce en düşük)',
                'Fiyata Göre(Artan)',
                'Fiyata Göre(Azalan)',
                'Tarihe Göre(En yeni)',
                'Tarihe Göre(En eski)',
            ].map((item) => ({
                label: item,
                value: item,
            })),
        },

        {
            label: 'Konum',
            title: 'Konum',
            name: 'location',
            defaultOpen: false,
            placeholder: 'Konum Seçiniz',
            items: [
                'Ankara',
                'Istanbul',
                'Mersin',
                'Antalya',
                'Izmir',
                'Kocaeli',
                'Kayseri',
            ].map((item) => ({
                label: item,
                value: item,
            })),
        },
    ];

    return (
        <ScreenContainer
            horizontalPadding={false}
            verticalPadding={0}
        >
            <HeaderShown
                paddingHorizontal={false}
                variant="lined"
            >
                <XStack>
                    <ButtonGoBack />

                    <Text
                        ml="$5"
                        {...TEXT_OPTIONS.BodySemiBold2XL}
                    >
                        Filtrele
                    </Text>
                </XStack>
            </HeaderShown>
            <YStack
                w={'100%'}
                h={'100%'}
                mt={'$7'}
                alignItems="center"
                justifyContent="space-between"
            >
                <ListItem>
                    <YStack width={'100%'}>
                        {map(type, (typeItem, index) => (
                            <YStack
                                alignItems={'center'}
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
                                <Select
                                    key={index}
                                    defaultOpen={false}
                                    items={typeItem.items}
                                    title={typeItem.title || ''}
                                    placeholder={typeItem.placeholder}
                                    triggerProps={{
                                        h: '$14',
                                        borderRadius: '$4',
                                    }}
                                    defaultValue={
                                        typeItem.defaultValue
                                    }
                                    onValueChange={(value) =>
                                        handleInfoChange(
                                            typeItem.name ?? '',
                                            value,
                                        )
                                    }
                                />
                            </YStack>
                        ))}
                    </YStack>
                </ListItem>
                <Button
                    variant="primary"
                    size="large"
                    onPress={() => {}}
                    w={'100%'}
                    pos={'absolute'}
                    bottom={'$44'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodySemiBoldL}
                        color="$white"
                    >
                        Uygula
                    </Text>
                </Button>
            </YStack>
        </ScreenContainer>
    );
};

export default searchFilter;
