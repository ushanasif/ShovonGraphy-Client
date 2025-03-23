import image from "../assets/images/Shovon Graphy-05.png";


const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 py-5">
        <p className="text-center text-sm text-white">
          &copy; {new Date().getFullYear()} ShovonGraphy. All rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
