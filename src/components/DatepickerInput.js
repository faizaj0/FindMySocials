import { FormControl, FormLabel } from "@chakra-ui/react";

import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";

export default function DatepickerInput({ date, setDate, label }) {
    return (
        <FormControl className={'datepicker-input'} isRequired>
            <FormLabel>{label}</FormLabel>
            <DatePicker
                className="rmdp-mobile"
                selected={date}
                onChange={(date) => setDate(date)}
                inputClass="calender"
            />
        </FormControl>
    )
}