import Link from 'next/link'
import buttonStyles from './button.module.css'



export default function Button(props) {
    return (
        <Link href={props.link}>
            <a className={buttonStyles.btn}>{props.children}</a>
        </Link>
    )
}
