import Icons from '../Icons/Icons'

const FeatureData = ({icons, text, data}) => {
  <div>
    {icons && <Icons type={icons}/>}
    <h3>{text}</h3>
    <span>{data}</span>
  </div>
}

export default FeatureData;
