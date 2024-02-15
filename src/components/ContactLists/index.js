import './index.css'

const ContactLists=(props)=>{
const {contactDetails,toggleItem}=props
const {names, mobileNo, isStar, id}=contactDetails
const isclick=()=>{
toggleItem(id)
}
const isUrl= isStar?'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
:'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'
return (
    <div className='flexy'>
    <li className='ls1'>
        <p className='name'>{names}</p>
        <hr className='separate'></hr>
        <p className='mobileno'>{mobileNo}</p>
        <button className='fav' onClick={isclick}>
            <img src={isUrl} className='favicon' alt='faviourite'/>
        </button>
    </li>
    </div>
)

}
export default ContactLists