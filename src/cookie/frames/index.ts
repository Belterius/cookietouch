import Account from "../Account";
import BasicFrame from "./BasicFrame";
import QueueFrame from "./common/QueueFrame";
import SecurityFrame from "./common/SecurityFrame";
import CharacterSelectionFrame from "./connection/CharacterSelectionFrame";
import IdentificationFrame from "./connection/IdentificationFrame";
import ServerSelectionFrame from "./connection/ServerSelectionFrame";

export default class Frames {

  private basic: BasicFrame;
  private queue: QueueFrame;
  private security: SecurityFrame;
  private characterSelection: CharacterSelectionFrame;
  private identification: IdentificationFrame;
  private serverSelection: ServerSelectionFrame;

  private account: Account;

  constructor(account: Account) {
    this.account = account;

    this.basic = new BasicFrame(this.account);
    this.queue = new QueueFrame(this.account);
    this.security = new SecurityFrame(this.account);
    this.characterSelection = new CharacterSelectionFrame(this.account);
    this.identification = new IdentificationFrame(this.account);
    this.serverSelection = new ServerSelectionFrame(this.account);
  }
}
