import React from 'react';
//Common Lib.
import {
    ButtonGoBack,
    HeaderShown,
    ScreenContainer,
} from '@components';
//Constants
import {TEXT_OPTIONS} from '@constants';
//UI Lib.
import {ScrollView, Text, XStack, YStack} from '@ui';

const PrivacyPolicy = () => {
    return (
        <ScreenContainer verticalPadding={0}>
            <HeaderShown variant="lined">
                <XStack gap={'$6'}>
                    <ButtonGoBack />
                    <Text {...TEXT_OPTIONS.BodySemiBold2XL}>
                        Gizlilik Politikası
                    </Text>
                </XStack>
            </HeaderShown>
            <ScrollView h={'92%'}>
                <YStack
                    marginTop="$2.5"
                    width={'100%'}
                >
                    <Text
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Bu Gizlilik Politikası, Tarat uygulamamızı
                        kullandığınızda kişisel bilgileri nasıl
                        topladığımızı, kullandığımızı ve ifşa
                        ettiğimizi açıklamaktadır. Tarat'ı kullanarak
                        bu politikada belirtilen şartları kabul etmiş
                        olursunuz. Bu Gizlilik Politikası, Tarat
                        uygulamamızı kullandığınızda kişisel bilgileri
                        nasıl topladığımızı, kullandığımızı ve ifşa
                        ettiğimizi açıklamaktadır. Tarat'ı kullanarak
                        bu politikada belirtilen şartları kabul etmiş
                        olursunuz.
                    </Text>
                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        Topladığımız Bilgiler:
                    </Text>
                    <Text
                        marginTop="$space.3"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale800'}
                    >
                        {`\u2022`} Kullanıcı Tarafından Sağlanan
                        Bilgiler:
                    </Text>
                    <Text
                        marginLeft="$space.3"
                        marginTop="$space.1"
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Adınız, iletişim bilgileriniz ve Tarat'ı
                        kullanırken sağlamayı seçtiğiniz diğer
                        bilgiler gibi kişisel bilgileri
                        toplayabiliriz.
                    </Text>
                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        {`\u2022`} Otomatik Olarak Toplanan Bilgiler:
                    </Text>
                    <Text
                        marginLeft="$space.3"
                        marginTop="$space.1"
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Hizmetlerimizi ve kullanıcı deneyimimizi
                        geliştirmek için cihazınız hakkında IP adresi,
                        cihaz türü ve işletim sistemi dahil olmak
                        üzere bilgiler toplayabiliriz.
                    </Text>

                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        {`\u2022`} QR Kod Taraması
                    </Text>
                    <Text
                        marginLeft="$space.3"
                        marginTop="$space.1"
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Tarat, arabanın camarginLeftarındaki QR
                        kodlarını taramak için cihazınızın kamerasına
                        erişim gerektirir. Bu bilgiler cihazınızda
                        yerel olarak işlenir.
                    </Text>

                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        Bilgi Paylaşımı:
                    </Text>
                    <Text
                        marginTop="$space.1"
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Kişisel bilgilerinizi pazarlama amaçları
                        doğrultusunda üçüncü taraflara satmıyor veya
                        paylaşmıyoruz. Ancak operasyonlarımızı
                        desteklemek amacıyla bilgileri hizmet
                        sağlayıcılarla paylaşabiliriz.
                    </Text>
                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        Güvenlik:
                    </Text>
                    <Text
                        marginTop="$space.1"
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Bilgilerinizi korumak için makul
                        önlemarginLefter alıyoruz ancak internet veya
                        elektronik depolama üzerinden hiçbir iletim
                        yöntemi tamamen güvenli değildir.
                    </Text>
                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        Bu Gizlilik Politikasındaki Değişiklikler:
                    </Text>
                    <Text
                        marginTop="$space.1"
                        {...TEXT_OPTIONS.BodyRegularM}
                        color={'$grayscale800'}
                    >
                        Bu Gizlilik Politikasını zaman zaman
                        güncelleyebiliriz. Herhangi bir değişiklik
                        olup olmadığını görmek için bu sayfayı düzenli
                        aralıklarla incelemeniz önerilir.
                    </Text>

                    <Text
                        marginTop="$space.6"
                        {...TEXT_OPTIONS.BodySemiBoldM}
                        color={'$grayscale900'}
                    >
                        {`\u2022`} Bize Ulaşın:
                    </Text>
                    <YStack>
                        <Text
                            marginTop="$space.4"
                            {...TEXT_OPTIONS.BodyRegularM}
                            color={'$grayscale800'}
                        >
                            Bu Gizlilik Politikası hakkında herhangi
                            bir sorunuz varsa lütfen bizimarginLefte{' '}
                            <Text color={'$primary'}>
                                privacy@tarat.app
                            </Text>{' '}
                            adresinden iletişime geçin.
                        </Text>
                    </YStack>
                </YStack>
            </ScrollView>
        </ScreenContainer>
    );
};

export default PrivacyPolicy;
