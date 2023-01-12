import { FormControl, FormLabel, Select } from "@chakra-ui/react"

export default function SelectInput({ value, setValue, options, label, placeholder }) {
    return (
        <FormControl isRequired>
            <FormLabel>{label}</FormLabel>
            <Select
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            >
                {options.map((option, index) => {
                    return (
                        <option key={index} value={option.value}>{option.label}</option>
                    )
                })}
            </Select>
        </FormControl>
    )
}