import {router} from 'expo-router';
import React, {useState} from 'react';
import APP_CONFIG from '@constants/APP_CONFIG';
import TEXT_OPTIONS from '@constants/TEXT_OPTIONS';
import {ButtonGoBack, HeaderShown, TabSwitch} from '@components';
import {QrCard, ScreenContainer} from '@components';
import {Text, XStack, YStack} from '@ui';

const Deleted = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (index: number) => {
        setActiveTab(index);
    };

    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown variant="lined">
                <XStack gap={'$4'}>
                    <ButtonGoBack />
                    <Text {...TEXT_OPTIONS.BodySemiBold2XL}>
                        Silinmiş QR
                    </Text>
                </XStack>
            </HeaderShown>
            <TabSwitch
                title1="Silinmiş"
                icon1="DeleteIcon"
                title2="Askıya Alınmış"
                icon2="BlockIcon"
                activeTab={activeTab}
                onTabChange={handleTabChange}
            />
            {activeTab === 0 ? (
                <YStack>
                    <QrCard
                        title={'Mercedes'}
                        qrDescription={'2023 Model Gündelik Aracım'}
                        qrStatus={'Otomobil'}
                        qrType={'İlan'}
                        deleteDate="01.01.2023"
                        deleteTitle="Silinme Tarihi"
                    />
                    <QrCard
                        title={'Mercedes'}
                        qrDescription={'2023 Model Gündelik Aracım'}
                        qrStatus={'Otomobil'}
                        qrType={'Araç'}
                        deleteDate="01.02.2024"
                        deleteTitle="Silinme Tarihi"
                    />
                </YStack>
            ) : (
                <YStack>
                    <QrCard
                        title="Audi"
                        qrDescription="2023 A5 Sportback"
                        qrStatus="Otomobil"
                        qrType="İlan"
                        objectionButton={true}
                    />
                    <QrCard
                        title="BMW"
                        qrDescription="2023 520d xDrive"
                        qrStatus="Otomobil"
                        qrType="Araç"
                        objectionButton={true}
                    />
                </YStack>
            )}
        </ScreenContainer>
    );
};

export default Deleted;
