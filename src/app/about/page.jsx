import Image from "next/image";
import spider_man from "../../assets/images/spiderman.jpeg"

const AboutPage = () => {
    return (
        <div>
            <h2>This is about page</h2>
            <Image height="400" width="500" src="/pikachu.jpg" alt="an image of pikachu"></Image>
            <Image height="400" width="500" src={spider_man} alt="an image of spider-man"></Image>
            <Image height="400" width="500" src="https://i.ibb.co.com/8LfLDby4/images-3.jpg" alt="an image of spider-man"></Image>

        </div>
    );
};

export default AboutPage;