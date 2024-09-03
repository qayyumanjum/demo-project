import'./button.css';

function onChange() {
    document.querySelector('.button').style.backgroundColor = 'red';
}
function Button () {
    return ( 
        <div className="container">
        <button className='button' onClick={onChange}>Click me</button>
        </div>
    )
}

export default Button;