// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Aggregation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Aggregation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Aggregation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Aggregation", id.toString(), this);
  }

  static load(id: string): Aggregation | null {
    return store.get("Aggregation", id) as Aggregation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalDeposits(): BigInt | null {
    let value = this.get("totalDeposits");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalDeposits(value: BigInt | null) {
    if (value === null) {
      this.unset("totalDeposits");
    } else {
      this.set("totalDeposits", Value.fromBigInt(value as BigInt));
    }
  }

  get totalDepositors(): BigInt | null {
    let value = this.get("totalDepositors");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalDepositors(value: BigInt | null) {
    if (value === null) {
      this.unset("totalDepositors");
    } else {
      this.set("totalDepositors", Value.fromBigInt(value as BigInt));
    }
  }

  get totalAmountDeposited(): BigInt | null {
    let value = this.get("totalAmountDeposited");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalAmountDeposited(value: BigInt | null) {
    if (value === null) {
      this.unset("totalAmountDeposited");
    } else {
      this.set("totalAmountDeposited", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Depositor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Depositor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Depositor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Depositor", id.toString(), this);
  }

  static load(id: string): Depositor | null {
    return store.get("Depositor", id) as Depositor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalAmountDeposited(): BigInt | null {
    let value = this.get("totalAmountDeposited");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set totalAmountDeposited(value: BigInt | null) {
    if (value === null) {
      this.unset("totalAmountDeposited");
    } else {
      this.set("totalAmountDeposited", Value.fromBigInt(value as BigInt));
    }
  }

  get depositCount(): BigInt | null {
    let value = this.get("depositCount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set depositCount(value: BigInt | null) {
    if (value === null) {
      this.unset("depositCount");
    } else {
      this.set("depositCount", Value.fromBigInt(value as BigInt));
    }
  }

  get deposits(): Array<string> | null {
    let value = this.get("deposits");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set deposits(value: Array<string> | null) {
    if (value === null) {
      this.unset("deposits");
    } else {
      this.set("deposits", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class DailyDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DailyDeposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DailyDeposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DailyDeposit", id.toString(), this);
  }

  static load(id: string): DailyDeposit | null {
    return store.get("DailyDeposit", id) as DailyDeposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dailyAmountDeposited(): BigInt | null {
    let value = this.get("dailyAmountDeposited");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set dailyAmountDeposited(value: BigInt | null) {
    if (value === null) {
      this.unset("dailyAmountDeposited");
    } else {
      this.set("dailyAmountDeposited", Value.fromBigInt(value as BigInt));
    }
  }

  get dailyDepositCount(): BigInt | null {
    let value = this.get("dailyDepositCount");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set dailyDepositCount(value: BigInt | null) {
    if (value === null) {
      this.unset("dailyDepositCount");
    } else {
      this.set("dailyDepositCount", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get dayID(): string {
    let value = this.get("dayID");
    return value.toString();
  }

  set dayID(value: string) {
    this.set("dayID", Value.fromString(value));
  }

  get depositor(): string | null {
    let value = this.get("depositor");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set depositor(value: string | null) {
    if (value === null) {
      this.unset("depositor");
    } else {
      this.set("depositor", Value.fromString(value as string));
    }
  }

  get pubkey(): Bytes {
    let value = this.get("pubkey");
    return value.toBytes();
  }

  set pubkey(value: Bytes) {
    this.set("pubkey", Value.fromBytes(value));
  }

  get withdrawal_credentials(): Bytes {
    let value = this.get("withdrawal_credentials");
    return value.toBytes();
  }

  set withdrawal_credentials(value: Bytes) {
    this.set("withdrawal_credentials", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}