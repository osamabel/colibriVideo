import { useSubscription } from "../context/SubscriptionContext";
import Description from "./Description";
import { Check } from "lucide-react";

function Subscription({ sub, desc }: any) {
  const {setIsSubscriptionOpen, setSubscription } = useSubscription();

  const toggleSubscription = (plan : any) => {
    setIsSubscriptionOpen(true);
    setSubscription(plan)
  };
  return (
    <div className="flex container flex-col gap-y-[40px] border-b-[1px] border-white/20 py-[40px]">
      <Description title={desc.title} desc={desc.desc} />
      <div className="flex flex-col lg:flex-row gap-[20px]">
        {sub.map((p: any, index: number) => (
          <div
            key={index}
            className={`flex-1 flex justify-center rounded-[16px] softshadSecondary ${
              p.Populaire ? "text-white gradient" : "text-[#222] gradientLight"
            }`}
          >
            <div className={`w-[80%] py-[40px] flex flex-col gap-y-[30px]`}>
              <div>
                <div className="flex flex-col gap-y-[10px] items-start">
                  <img src={`/${p.type}.svg`} alt="" />
                  <h2
                    className={`text-[14px] font-Raleway font-bold opacity-75`}
                  >
                    {p.type}
                  </h2>
                </div>
                <div className="flex flex-col gap-y-[10px] items-start">
                  <p className={`text-[30px] font-Raleway font-bold py-[30px]`}>
                    {p.price}
                  </p>
                </div>
                <div className="flex flex-col gap-y-[10px] items-start">
                  <p className={`text-[14px] font-Raleway opacity-50`}>
                    {p.desc}
                  </p>
                </div>
              </div>
              <hr
                className={`border-none h-[1px] opacity-10 ${
                  p.Populaire ? "bg-white" : "bg-[#222]"
                }`}
              />
              <ul className="flex flex-col gap-[10px]">
                {p.benifits.map((b: any, index: number) => (
                  <li key={index} className="flex items-center gap-[10px]">
                    <div
                      className={` min-w-[25px] min-h-[25px] rounded-full flex items-center justify-center ${
                        p.Populaire ? "bg-white" : "bg-secondary"
                      }`}
                    >
                      <Check
                        color={`${!p.Populaire ? "white" : "#F35E98"}`}
                        width={16}
                      />
                    </div>
                    <h2
                      className={`text-[14px] font-Raleway font-[400] opacity-75`}
                    >
                      {b}
                    </h2>
                  </li>
                ))}
              </ul>
              <button
                onClick={()=>{ toggleSubscription(p)}}
                className={`rounded-[12px] font-[700] py-[10px] ${
                  !p.Populaire
                    ? "text-white gradient"
                    : "text-secondary bg-white"
                }`}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;
