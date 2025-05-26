import { Label, TextInput, Radio, Button } from "flowbite-react";

const BabyFormInput = () => {
  return (
    <div className="bg-white">
      <form className="w-full max-w-6xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">

          <div>
            <Label className="mb-4 block !text-primary-dark font-semibold  font-poppins">Gender Bayi</Label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2">
                <Radio
                  name="gender"
                  value="perempuan"
                  className="!text-primary-darkest !border-primary-darkest !bg-white focus:!ring-0 focus:!ring-offset-0"
                />
                <span className="text-primary-darkest font-open-sans">Perempuan</span>
              </label>
              <label className="flex items-center gap-2">
                <Radio
                  name="gender"
                  value="laki-laki"
                  className="!text-primary-darkest !border-primary-darkest !bg-white focus:!ring-0 focus:!ring-offset-0"
                />
                <span className="text-primary-darkest font-open-sans">Laki-laki</span>
              </label>
            </div>
          </div>
          <div>
            <Label htmlFor="usia" className="mb-3 block !text-primary-dark font-semibold font-poppins">
              Usia (bulan)
            </Label>
            <TextInput
              id="usia"
              placeholder="Contoh: 6"
              required
              theme={{
                field: {
                  input: {
                    base: "!bg-white !border-primary-dark hover:!border-primary-dark font-open-sans !text-primary-dark placeholder:text-gray-500 focus:!ring-0 focus:!border-secondary",
                  },
                },
              }}
            />
          </div>

          <div>
            <Label htmlFor="berat" className="mb-3 block !text-primary-dark font-semibold">
              Berat (kg)
            </Label>
            <TextInput
              id="usia"
              placeholder="Contoh: 7.2 kg"
              required
              theme={{
                field: {
                  input: {
                    base: "!bg-white !border-primary-dark !text-primary-dark font-open-sans placeholder:text-gray-500 focus:!ring-0 focus:!border-secondary",
                  },
                },
              }}
            />
          </div>

          <div>
            <Label htmlFor="panjang" className="mb-3 block !text-primary-dark font-semibold font-poppins">
              Panjang Badan (cm)
            </Label>
            <TextInput
              id="usia"
              placeholder="Contoh: 65 cm"
              required
              theme={{
                field: {
                  input: {
                    base: "!bg-white !border-primary-dark !text-primary-dark font-open-sans placeholder:text-gray-500 focus:!ring-0 focus:!border-secondary",
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="text-center pt-4 font-open-sans">
          <Button
            type="submit"
            className="px-6 py-2 font-semibold text-white !bg-secondary-light hover:!bg-secondary transition"
          >
            Hitung
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BabyFormInput;