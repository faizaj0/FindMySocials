import Socialmodal from "../components/socialmodal";

export default function UserSliderItem({ item }) {
    return (
        <div className="flex-container userdetail">
            <div>
                <h1>
                    {item.general_info.first_name} {item.general_info.last_name}
                </h1>
                {/* to be changed: */}
                <p>
                    Distance: 100m
                </p>
                <Socialmodal />
            </div>
            <div className='swipebuttons flex-container'>
            </div>
        </div>
    );
}
