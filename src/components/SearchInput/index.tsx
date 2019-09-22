import React from 'react';
import "./index.scss";

export interface SearchInputProps {
    onSearch?: (searchQuery?: string) => void;
}

class SearchInput extends React.Component<SearchInputProps> {
    constructor(props: SearchInputProps) {
        super(props);
    }

    render() {
        return (
            <div />
        );
    }
}

export default SearchInput;