import userTransactions from "./transaction.json"
import css from './transaction.module.css'

function TransactionHistory() {
    return (
      <table className={css.container}>
  <thead>
    <tr>
      <th className={css.title}>Type</th>
      <th className={css.title}>Amount</th>
      <th className={css.title}>Currency</th>
    </tr>
  </thead>
            {userTransactions.transactions.map(({ id, type, amount, currency }) => {
                return(
                <tbody key={id}>
                    <tr>
                        <td className={css.item}>{type }</td>
                        <td className={css.item}>{amount }</td>
                        <td className={css.item}>{currency }</td>
                    </tr>
                </tbody>
            )}
        
            )}
       
    
</table>
   
)}

export default TransactionHistory;