import Layout from '../components/Layout';
import Cover from '../components/Cover/Cover';
import FeatureImg from '../components/Feature/FeatureImg';
import Carousel from '../components/Carousel';
import BannerCta from '../components/Banner/BannerCta';
import { promotionsCover, bannerCta, featureImg } from '../mocks/promotionsMock';

const Promotions = () => (
    <Layout>
        <Cover
            gradientBg={promotionsCover.gradientBg}
            text={promotionsCover.text}
            paragraph={promotionsCover.paragraph}
            hasButtons={promotionsCover.hasButtons}
        />
        {
            featureImg.map(el => <FeatureImg
                imgSrc={el.imgSrc}
                imgAlt={el.imgAlt}
                copy={el.copy}
                title={el.title}
                description={el.description}
                imageAlign={el.imageAlign}
                bgGrey={el.bgGrey}
                hasCta={el.hasCta}
                buttonText={el.buttonText}
                buttonHref={el.buttonHref}
            />)
        }
        <BannerCta
            title={bannerCta.title}
            buttonText={bannerCta.buttonText}
            buttonHref={bannerCta.buttonHref}
        />
        <Carousel />
    </Layout>
)

export default Promotions
