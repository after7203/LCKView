import Image from "next/image";

const Player = ({
  line,
  info,
}: {
  line: "top" | "jungle" | "mid" | "adc" | "sup";
  info: {
    name: string;
    src: string;
  };
}) => {
  return (
    <div className="rounded-md bg-slate-200 p-4 dark:bg-slate-500 dark:text-white">
      <div className="mb-5 flex font-bold">
        {(() => {
          switch (line) {
            case "top":
              return <TopSvg />;
            case "jungle":
              return <JungleSvg />;
            case "mid":
              return <MidSvg />;
            case "adc":
              return <AdcSvg />;
            case "sup":
              return <SupSvg />;
          }
        })()}
        {info.name}
      </div>
      <div className="relative mb-5 h-[134px] w-[180px]">
        <Image
          className="object-fill"
          fill
          src={info.src}
          alt={"선수 이미지"}
        />
      </div>
    </div>
  );
};

export default Player;

const TopSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-esports-blue-500 mr-1 h-6 w-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3H3v16l4-4V7h8l4-4Z"
        fill="#54C8E8"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 21h16V5l-4 4v8H9l-4 4Z"
        fill="#515163"
      ></path>
      <path fill="#515163" d="M10 10h4v4h-4z"></path>
    </svg>
  );
};

const JungleSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-esports-blue-500 mr-1 h-6 w-6"
    >
      <path
        clipRule="evenodd"
        d="M12.116 22s1.396-5.116 0-10.046C10.721 7.024 6.721 3.209 5.14 2c0 0 2.418 6.698 2.79 11.07 0 0-1.394-3.412-4.93-4.28 0 0 2.45 5.024 2.916 7.815 0 0 3.317 2.077 6.2 5.395Zm2.318-7.237a27.45 27.45 0 0 1 .207 5.335c1.644-1.282 3.382-3.679 3.382-3.679S18 14.5 18.5 12.5C19.04 10.34 21 8 21 8c-3.92.98-5.572 4.59-6.509 6.64l-.057.123Zm.438-4.463c-.379.584-.73 1.166-1.05 1.733a8.21 8.21 0 0 1-.037-.15c-.019-.075-.037-.15-.058-.225a20.772 20.772 0 0 0-1.16-3.08l.023-.062c.045-.125.09-.25.147-.376 0 0 1.813-3.78 5.255-5.564 0 0-2.325 3.052-2.837 6.029-.107.63-.198 1.183-.28 1.68l-.003.014Z"
        fill="#54c8e8"
      ></path>
    </svg>
  );
};

const MidSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-esports-blue-500 mr-1 h-6 w-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11 7 4-4H3v12l4-4V7h4ZM13 17l-4 4h12V9l-4 4v4h-4Z"
        fill="#515163"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 3h3v3L6 21H3v-3L18 3Z"
        fill="#54C8E8"
      ></path>
    </svg>
  );
};

const AdcSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-esports-blue-500 mr-1 h-6 w-6"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 3H3v16l4-4V7h8l4-4Z"
        fill="#515163"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 21h16V5l-4 4v8H9l-4 4Z"
        fill="#54C8E8"
      ></path>
      <path fill="#515163" d="M10 10h4v4h-4z"></path>
    </svg>
  );
};

const SupSvg = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-esports-blue-500 mr-1 h-6 w-6"
    >
      <path
        clipRule="evenodd"
        d="M9.5 4.833 10.257 4h3.486l.757.833v.834l-1.667 2.5h-1.666L9.5 5.667v-.834Zm0 12.696 1.667-7.696h1.666L14.5 17.53v.804L12.833 20h-1.666L9.5 18.333v-.804ZM3.667 9h2.5l-.834 1.667 2.5 2.5L9.5 9 7 6.5H2L3.667 9Zm14.166 0h2.5L22 6.5h-5L14.5 9l1.667 4.167 2.5-2.5L17.833 9Z"
        fill="#54c8e8"
      ></path>
    </svg>
  );
};
