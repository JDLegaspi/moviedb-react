import React from 'react';
import "./index.scss";

export interface SearchInputProps {
    onSearch?: (searchQuery?: string) => void;
}

class SearchInput extends React.Component<SearchInputProps> {
    constructor(props: SearchInputProps) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    //search method is called when typing into the search box
    handleInputChange(e:  React.ChangeEvent<HTMLInputElement>) {
        if (this.props.onSearch !== undefined) this.props.onSearch(e.currentTarget.value);
    }

    render() {
        let searchIcon = (
            <svg id="search-input-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0963 10.8588L15.8898 14.6524C16.0367 14.7993 16.0367 15.0368 15.8898 15.1836L15.1836 15.8898C15.0368 16.0367 14.7993 16.0367 14.6524 15.8898L10.8588 12.0963C10.7901 12.0244 10.7495 11.9307 10.7495 11.8307V11.4182C9.60891 12.4025 8.1246 12.9994 6.49968 12.9994C2.90923 12.9994 0 10.0901 0 6.49968C0 2.90923 2.90923 0 6.49968 0C10.0901 0 12.9994 2.90923 12.9994 6.49968C12.9994 8.1246 12.4025 9.60891 11.4182 10.7495H11.8307C11.9307 10.7495 12.0244 10.787 12.0963 10.8588ZM1.49987 6.49966C1.49987 9.26202 3.73726 11.4994 6.49963 11.4994C9.26199 11.4994 11.4994 9.26202 11.4994 6.49966C11.4994 3.73729 9.26199 1.4999 6.49963 1.4999C3.73726 1.4999 1.49987 3.73729 1.49987 6.49966Z" fill="#01D277"/>
            </svg>
        );


        return (
            <div className="search-input-outer-wrapper">
                <div className="search-input-inner-wrapper">
                    <input
                        className="search-input"
                        placeholder="Search"
                        onChange={this.handleInputChange}
                    />
                    {searchIcon}
                </div>
            </div>
        );
    }
}

export default SearchInput;