import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
    return (
        //  Forms a letter and word
        <span>
            {
                strArray.map((char, i) => (
                    // letter and an index it can have the repeated letters
                    <span key = {char + i} className = {`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters