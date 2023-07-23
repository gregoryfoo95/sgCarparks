import { ActiveComponent } from "../../@types/ActiveComponent";

  type PromptWindowProps = {
    onPromptClick: (component: ActiveComponent) => void;
  };

export default function PromptWindow({onPromptClick}: PromptWindowProps): JSX.Element {
    return (
      <div className="flex flex-col gap-y-2 px-10 font-bold ">
        <div
          className="grid w-full h-16 rounded-full px-8 border-4 border-indigo-500 bg-base-300 text-white place-content-center cursor-pointer text-sm md:text-lg"
          onClick={() => onPromptClick(ActiveComponent.AboutMe)}
        >
          Tell me more about yourself!
        </div>
        <div
          className="grid w-auto h-16 rounded-full px-8 border-4 border-indigo-500 bg-base-300 text-white place-content-center cursor-pointer text-sm md:text-lg"
          onClick={() => onPromptClick(ActiveComponent.TechnicalExperience)}
        >
          Could you show me some of your technical experience?
        </div>
        <div
          className="grid w-auto h-16 rounded-full px-8 border-4 border-indigo-500 bg-base-300 text-white place-content-center cursor-pointer text-sm md:text-lg"
          onClick={() => onPromptClick(ActiveComponent.Study)}
        >
          Where did you study?
        </div>
        <div
          className="grid w-auto h-16 rounded-full px-8 border-4 border-indigo-500 bg-base-300 text-white place-content-center cursor-pointer text-sm md:text-lg"
          onClick={() => onPromptClick(ActiveComponent.CareerExperience)}
        >
          Expand more on your career experience!
        </div>
        <div
          className="grid w-auto h-16 rounded-full px-8 border-4 border-indigo-500 bg-base-300 text-white place-content-center cursor-pointer text-sm md:text-lg"
          onClick={() => onPromptClick(ActiveComponent.TechStack)}
        >
          Let me know your tech stacks!
        </div>
      </div>
    );
}
