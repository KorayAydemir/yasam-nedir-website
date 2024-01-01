import { Link } from "react-router-dom";

interface ButtonProps {
    text: string;
    className?: string;
}

const ButtonAnchor = ({ text, className }: ButtonProps) => {
    return (
        <div
            className={`inline-block rounded-lg bg-green text-center ${className}`}>
            <div className="flex h-12 items-center whitespace-nowrap">
                <Link to="/yasambilim">{text}</Link>
            </div>
        </div>
    );
};

const Links = () => {
    return (
        <div className="">
            <div className="grid min-w-[300px] max-w-[900px] grid-cols-2 gap-4 p-52">
                <ButtonAnchor text="Yaşam Bilim" />
                <ButtonAnchor text="Evrim Kuramı" />
                <ButtonAnchor text="Denemeler" className="col-span-2" />
            </div>
        </div>
    );
};

export default Links;
