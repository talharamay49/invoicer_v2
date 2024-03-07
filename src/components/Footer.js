
export default function Footer() {

  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="grid grid-cols-3 gap-2 justify-center">
          <li>
            <p>Company Name:</p>
            <p className="font-bold">Royal Studio</p>
          </li>
          <li>
            <p >Email:</p>
            <span className="font-bold">royalstudio089@gmail.com</span>
          </li>
          <li>
            <p>Phone number:</p>
            <span className="font-bold">+92-308-4877073</span>
          </li>
          <li>
            <span className="font-bold">Bank:</span>
          </li>
          <li>
            <span className="font-bold">Account holder:</span>
          </li>
          <li>
            <span className="font-bold">Account number:</span>
          </li>
          <li>
            <span className="font-bold">Website:</span>{" "}
            <a href="https://www.instagram.com/royalstudio089/" target="_blank" rel="noopenner noreferrer">
              https://www.instagram.com/royalstudio089/
            </a>
          </li>
        </ul>
      </footer>

      <p className="text-center px-5 mt-8 text-xs ">
        Invoicer is built by{" "}
        <a
          href="https://www.instagram.com/royalstudio089/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Royal Studio
        </a>
      </p>
    </>
  );
}
