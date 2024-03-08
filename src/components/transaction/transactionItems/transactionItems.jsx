import css from './transactionItems.module.css'

const TransactionItems = ({item}) => {
  return (
        <tr>
            <td className={css.item}>{item.type }</td>
            <td className={css.item}>{item.amount }</td>
            <td className={css.item}>{item.currency }</td>
        </tr>
  )
}

export default TransactionItems
