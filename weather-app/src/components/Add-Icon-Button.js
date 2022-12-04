function AddIconButton(props){
    const {handleClick, data} =props;
    return(
        <span className={"add-icon-style"} onClick={handleClick}>{data}</span>
    )
}
export default AddIconButton;