import Image from "next/image";

const NotFoundPage = () => {
    return (

        <div className="flex  justify-center mt-12">
            <Image
                src="https://e7.pngegg.com/pngimages/946/869/png-clipart-responsive-web-design-http-404-web-template-system-others-miscellaneous-purple.png"
                width={500}
                height={500}
                alt="not found page"
            />
        </div>

    );
};

export default NotFoundPage;
