import React from 'react';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
    ComboboxPopover,
	ComboboxOption
} from '@reach/combobox';
import '@reach/combobox/styles.css';

export default function Search({ panTo }) {
    const { ready, value, suggestions: {status, data}, setValue, clearSuggestions } = usePlacesAutocomplete();

    return (
        <div className='combobox'>
            <Combobox
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();

                    try {
                        const results = await getGeocode({address});
                        const { lat, lng } = await getLatLng(results[0]);
                        panTo({lat, lng});
                    } catch(err) {
                        console.log("error");
                    }
                }}
            >
                <ComboboxInput className='combobox__input'
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    disabled={!ready}
                    placeholder='Enter an address'
                />
                <ComboboxPopover className="combobox__popover">
                    {status === "OK" && 
                    data.map(({ id, description}) => (
                        <ComboboxOption className='combobox__option' key={id} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>
    );
};