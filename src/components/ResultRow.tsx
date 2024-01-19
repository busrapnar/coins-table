
type ResultRowProps = {
  loading?: boolean;
  providerName?: string;
  btc?: string;
};

type Logo = { source: string; invert?: boolean };

const logos: { [keys: string]: Logo } = {
  paybis: { source: 'https://raw.githubusercontent.com/dejwid/btc-table/master/src/assets/paybis.webp', invert: true },
  guardarian: { source: "https://guardarian.com/main-logo.svg" },
  moonpay: { source: "https://www.moonpay.com/assets/logo-full-white.svg" },
  transak: {
    source: "https://assets.transak.com/images/website/transak-logo-white.svg",
  },
};
const ResultRow = ({ loading, providerName, btc }: ResultRowProps) => {
  let url = `https://${providerName}.com`;
  if (providerName === 'guardarian'){
    url += '/buy-btc';
  }
  return (
    <a
    href={url}
    target="_blank"
      className="block relative border border-white/10 min-h-[64px] rounded-lg 
    bg-gradient-to-f from-purple-500/10 to-blue-500/10 p-4 my-2 overflow-hidden"
    >
      <div className="flex gap-4">
        {providerName && (
          <div className="grow items-center flex">
            <img
              src={logos[providerName].source}
              className={
                "h-8 "+(logos[providerName]?.invert ? 'invert' : '')
              }
              alt=""/>
          </div>
        )}
        {btc && (
          <div className="flex gap-2">
            <span className="text-xl text-purple-200/80">
              {new Intl.NumberFormat("sv-SE", {
                minimumFractionDigits: 8,
              }).format(parseFloat(btc))}
            </span>
            <span className="tet-xl text-purple-300/50">BTC</span>
          </div>
        )}
      </div>
      {loading && (
        <div
          className="inset-0 absolute bg-gradient-to-r from-transparent
            via-blue-700/50 to-transparent skeleton-animation border-t border-white/25"
        />
      )}
    </a>
  );
};

export default ResultRow;
