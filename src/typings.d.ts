export type ScottishBank = "Scottish Bank";
export type LondonBank = "London Bank";
export type YorkshireBank = "Yorkshire Finance";
export type BanksList = ScottishBank | LondonBank | YorkshireBank;
export type AccountTypes = "savings" | "current";

export interface UserAccount {
  name: string;
  bank: BanksList;
  accountType: AccountTypes;
  balance: number;
}
