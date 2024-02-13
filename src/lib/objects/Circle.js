import { Composite } from "matter-js";
import { MatetrObject } from "./MatterObject";

class Circle extends MatetrObject {
  DefaultRadius = 25;
  /**
   * @method 円生成
   * @param {number} x X座標
   * @param {number} y Y座標
   * @param {number} radius 半径
   * @param {object} option オプション
   * @description 円を生成
   */
  constructor(
    x,
    y,
    type = "default",
    radius = this.DefaultRadius,
    option = {}
  ) {
    super(x, y, type);
    this.object = this.bodies.circle(x, y, radius, this.getOptionAddColor(option));
  }
}

export { Circle };