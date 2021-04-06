import Layout from "../components/Layout";
import FirstStepsProvider from '../contexts/firstStepsContext'
import FirstStepsWrapper from '../components/FirstSteps/FirstStepsWrapper'

const FirstStepsContent = require('../contents/first-steps/content');

export default () => (
    <Layout>
        <FirstStepsProvider data={FirstStepsContent}>
            <FirstStepsWrapper/>
        </FirstStepsProvider>
    </Layout>
)