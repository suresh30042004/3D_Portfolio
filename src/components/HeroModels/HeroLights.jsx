import {SpotLight} from "@react-three/drei";


const HeroLights = () => {
    return (
        <>
            <SpotLight position={[6, 4, 3]}
            intensity={100}/>
        </>
    )
}
export default HeroLights
