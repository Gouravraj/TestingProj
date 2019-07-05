let SCREEN_SIZE;
/**
 * The values in the below object are percentages of the screen
 */
const SWIPE_DIRECTION = {
  down: {
    start: { x: 50, y: 15 },
    end: { x: 50, y: 85 }
  },
  left: {
    start: { x: 95, y: 50 },
    end: { x: 5, y: 50 }
  },
  right: {
    start: { x: 5, y: 50 },
    end: { x: 95, y: 50 }
  },
  up: {
    start: { x: 50, y: 85 },
    end: { x: 50, y: 15 }
  }
};

class Scroll {
  static checkIfDisplayedWithScrollDown(element, maxScrolls, amount = 0) {
    if (
      (!element.isExisting() || !element.isDisplayed()) &&
      amount <= maxScrolls
    ) {
      this.swipeUp(0.85);
      this.checkIfDisplayedWithScrollDown(element, maxScrolls, amount + 1);
    } else if (amount > maxScrolls) {
      throw new Error(
        `The element '${element}' could not be found or is not visible.`
      );
    }
  }

  static swipeDown(percentage = 1) {
    this.swipeOnPercentage(
      this._calculateXY(SWIPE_DIRECTION.down.start, percentage),
      this._calculateXY(SWIPE_DIRECTION.down.end, percentage)
    );
  }

  static swipeUp(percentage = 1) {
    this.swipeOnPercentage(
      this._calculateXY(SWIPE_DIRECTION.up.start, percentage),
      this._calculateXY(SWIPE_DIRECTION.up.end, percentage)
    );
  }

  static swipeLeft(percentage = 1) {
    this.swipeOnPercentage(
      this._calculateXY(SWIPE_DIRECTION.left.start, percentage),
      this._calculateXY(SWIPE_DIRECTION.left.end, percentage)
    );
  }

  static swipeRight(percentage = 1) {
    this.swipeOnPercentage(
      this._calculateXY(SWIPE_DIRECTION.right.start, percentage),
      this._calculateXY(SWIPE_DIRECTION.right.end, percentage)
    );
  }

  static swipeOnPercentage(from, to) {
    SCREEN_SIZE = SCREEN_SIZE || driver.getWindowRect();
    const pressOptions = this._getDeviceScreenCoordinates(SCREEN_SIZE, from);
    const moveToScreenCoordinates = this._getDeviceScreenCoordinates(
      SCREEN_SIZE,
      to
    );
    this.swipe(pressOptions, moveToScreenCoordinates);
  }

  static swipe(from, to) {
    driver.touchPerform([
      {
        action: 'press',
        options: from
      },
      {
        action: 'wait',
        options: { ms: 500 }
      },
      {
        action: 'moveTo',
        options: to
      },
      {
        action: 'release'
      }
    ]);
    driver.pause(500);
  }

  static _getDeviceScreenCoordinates(screenSize, coordinates) {
    return {
      x: Math.round(screenSize.width * (coordinates.x / 100)),
      y: Math.round(screenSize.height * (coordinates.y / 100))
    };
  }

  static _calculateXY({ x, y }, percentage) {
    return {
      x: x * percentage,
      y: y * percentage
    };
  }
}

export default Scroll;
