import DropDown from "../widgets/Dropdown";

export default function Filter() {
    const options = [
        { value: "starwars", label: "Star Wars" },
        { value: "marvel", label: "Marvel" },
        { value: "dc", label: "DC" },
        { value: "lotr", label: "Lord of the Rings" },
    ];


    return (
        <div className="mx-8 w-1/5">
            <DropDown
                label="Franchise"
                options={options}
                value={""}
                onChange={() => {}}
                placeholder="Choose Franchise"
            />

           <DropDown
                label="Goju"
                options={options}
                value={""}
                onChange={() => {}}
                placeholder="Choose Franchise"
            />

            <DropDown
                label="Franchise"
                options={options}
                value={""}
                onChange={() => {}}
                placeholder="Choose Franchise"
            />
        </div>
    )
}