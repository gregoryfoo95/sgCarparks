import TypeWriter from "./InnerHomePageTypeWriter";
import InnerHomePageWindow from  "./InnerHomePageWindow";
import SuccessHack from "./SuccessHack";
import role from "../@classes/role";

export default function InnerHomePage(): JSX.Element {
    const roles = [
        new role('a', 'Full Stack Web Developer'),
        new role('an', "Aerospace Engineer"),
        new role('a', "RAiDer")
      ];

    return  (
        <div className="flex flex-col gap-y-4 ">
            <TypeWriter appendClass="" roles={roles} prefix="" />
            <SuccessHack/>
            <InnerHomePageWindow/>
        </div>
    );
};

