import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactItem = ({ icon, title, content }) => (
    <div className="flex items-center">
      <FontAwesomeIcon icon={icon} className="text-dourado-texto w-10 h-10 mr-4" />
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-gray-400">{content}</p>
      </div>
    </div>
 );

export default ContactItem
