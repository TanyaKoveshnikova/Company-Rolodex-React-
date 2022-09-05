import './select-box.styles.scss'

interface ISelectBoxProps {
    className?: string;
    onSearchHandler: any;
    optionItems: (string | undefined)[];
    firstOptions: string
}

const SelectBox = (props: ISelectBoxProps) => {
    const {onSearchHandler, optionItems, className, firstOptions} = props;

    return (
        <div className='select-boxItem'>
            <select onChange={onSearchHandler} name="" id="" className={`custom-select-field ${className}`}>
                <option value="">{firstOptions}</option>
                {optionItems.map((optionItem) => {
                    return <option key={optionItem} value={optionItem}>{optionItem}</option>;
                })}
            </select>
        </div>
    )
}

export default SelectBox;