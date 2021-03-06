import EntityDispositionInformations from "@/protocol/network/types/EntityDispositionInformations";
import EntityLook from "@/protocol/network/types/EntityLook";
import GameRolePlayNamedActorInformations from "@/protocol/network/types/GameRolePlayNamedActorInformations";
import HumanOption from "@/protocol/network/types/HumanOption";

export default class GameRolePlayMerchantInformations extends GameRolePlayNamedActorInformations {
  public options: HumanOption[];
  public sellType: number;

  constructor(contextualId = 0, look: EntityLook, disposition: EntityDispositionInformations,
              name = "", sellType = 0, options: HumanOption[] = null) {
    super(contextualId, look, disposition, name);
    this.options = options;
    this.sellType = sellType;

  }
}
