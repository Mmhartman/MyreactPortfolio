import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index';

const About = () => {
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        strArray={['A', 'b', 'o', 'u', 't',' ' , 'm', 'e']}
                        idx={15} //1.5 seconds delay
                    />
                </h1>
                <p>Lorem ipsum dolor sit amet. 33 exercitationem dolorem et repellat tenetur qui galisum fugiat ad inventore temporibus et cupiditate minus. 33 quis possimus in nihil voluptatibus est expedita dolorem. Hic nihil recusandae ut reiciendis repellendus eum itaque molestiae? Est galisum dolorem est doloremque animi vel dolor suscipit eos repellat consectetur et quae laudantium.</p>
                <p>Lorem ipsum dolor sit amet. 33 exercitationem dolorem et repellat tenetur qui galisum fugiat ad inventore temporibus et cupiditate minus. 33 quis possimus in nihil voluptatibus est expedita dolorem. </p>
                <p>Hic nihil recusandae ut reiciendis repellendus eum itaque molestiae? Est galisum dolorem est doloremque animi vel dolor suscipit eos repellat consectetur et quae laudantium.</p>
            </div>
        </div>
    )
}

export default About;
