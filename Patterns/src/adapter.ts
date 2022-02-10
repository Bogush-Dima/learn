class ShowString {
  constructor(
    public value: string
  ){}

  showValue() {
    console.log(this.value)
  };
}

const showStringAdapter = (value: string | number) => {
  if (typeof value === "string") {
    return new ShowString(value)
  }

  return new ShowString(`${value}`)
}

const withStringValue = showStringAdapter("value")
const withNumberValue = showStringAdapter(234)

withStringValue.showValue()
withNumberValue.showValue()

// npx ts-node adapter.ts