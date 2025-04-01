export interface IWithdrawFormProps {
  balance: string;
  currency: string;
  onWithdraw: (amount: number) => void;
}
