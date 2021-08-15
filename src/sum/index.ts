export type SumInputs = {
  a: number;
  b: number;
};

export default function sum(inputs: SumInputs): number {
  return inputs.a + inputs.b;
}
