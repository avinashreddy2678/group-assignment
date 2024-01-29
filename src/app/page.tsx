"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function Home() {
  const secondoptions = [
    {
      id: "India",
      label: "India",
    },
    {
      id: "China",
      label: "China",
    },
    {
      id: "Russia",
      label: "Russia",
    },
    {
      id: "Option 4",
      label: "Option 4",
    },
  ];

  const fourthoptions = [
    {
      id: "Romania",
      label: "Romania",
    },
    {
      id: "Switzerland",
      label: "Switzerland",
    },
    {
      id: "Antarctica",
      label: "Antarctica",
    },
    {
      id: "China",
      label: "China",
    },
    {
      id: "South Africa",
      label: "South Africa",
    },
    {
      id: "Option 6",
      label: "Option 6",
    },
  ];

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [secondanswer, setsecondanswer] = useState("");
  const [thirdanswer,setthirdanswer]=useState("");
  const [fourthanswer,setfourthanswer]=useState<string[]>([]);
  const [copysecondans, setsecondans] = useState([...secondoptions]);
  const [all, setall] = useState([...fourthoptions]);
  const form = useForm({});

  const hanldefirstname = (e: any) => {
    setfirstname(e.target.value);
  };

  const handlelastname = (e: any) => {
    setlastname(e.target.value);
  };

  const hanldesecondanswer = (ans: string) => {
    setsecondanswer(ans);
  };

  const hanldecross = (id: string) => {
    let array = copysecondans.filter((item) => item.id !== id);
    setsecondans(array);
  };
  const handlethirdanswer=(ans:string)=>{
    setthirdanswer(ans);
  }
  const handlefour=(ans:string)=>{
    setfourthanswer([...fourthanswer,ans])
  }
  const hanldecancel = (iem: string) => {
    const itemss = all.filter((item) => item.id !== iem);
    setall(itemss);
  };
  return (
    <div className="py-12">
      <div className="text-center py-12 text-gray-400">
        Economics CA-1 exam - 20 marks
      </div>
      <div className="w-[70%] m-auto">
        {/* first question */}
        <div className="lg:mx-12">
          <p className="text-lg">
            <span>1.</span> Full Name <span className="text-red-700">*</span>
          </p>
          <p className="italic pt-1 text-gray-500">
            Add description (optional)
          </p>
          <div className="block lg:flex pt-3">
            <Input
              onChange={(e) => {
                hanldefirstname(e);
              }}
              className="py-2 text-lg mr-3 outline-none"
              required
              placeholder="First Name"
            />
            <Input
              onChange={(e) => {
                handlelastname(e);
              }}
              className="py-2 text-lg"
              required
              placeholder="Last Name"
            />
          </div>
        </div>
        {/* secons question */}

        <div className="border mt-12 px-3 rounded-lg border-blue-400">
          <div className="flex my-3 lg:w-[50%] justify-between ml-auto">
            <div className="text-gray-300 rotate-90 text-center">
              <DragIndicatorIcon />
            </div>

            <div className="flex gap-3 hover:cursor-pointer">
              <KeyboardArrowUpIcon />
              <KeyboardArrowDownIcon />
              <LibraryAddIcon />
              <DeleteIcon />
              <SettingsIcon />
            </div>
          </div>

          <div className="lg:mx-12">
            <p className="text-lg">
              <span>2.</span>Which country has the highest population in the
              world?<span className="text-red-700">*</span>
            </p>
            <p className="italic mt-2 text-gray-500">
              Add description (optional)
            </p>
            <div className="my-4 mb-12">
              <RadioGroup defaultValue="comfortable">
                {copysecondans.map((item) => (
                  <div key={item.id}>
                    <div
                      className={`flex rounded-md lg:w-[30%] border ${
                        item.id === "Option 4" ? "text-gray-400 italic" : ""
                      } border-gray-300 p-2 bg-gray-100 justify-between items-center space-x-2`}
                    >
                      <div>
                        <RadioGroupItem
                          onClick={(e: any) => {
                            hanldesecondanswer(e.target.value);
                          }}
                          value={item.label}
                          id={item.id}
                        />
                        <Label className="px-2">{item.label}</Label>
                      </div>
                      {item.id !== "Option 4" ? (
                        <div className="hover:cursor-pointer" onClick={() => hanldecross(item.id)}>X</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* three question */}
        <div className="lg:mx-12 mt-12">
          <p className="text-lg">
            <span>3.</span>Why 3 reasons for global warming
            <span className="text-red-700">*</span>
          </p>
          <p className="text-gray-500 pl-4 pt-2 text-sm">
            Atleast 3 points expected
          </p>
          <Input placeholder="Type here" onChange={(e)=>{handlethirdanswer(e.target.value)}} className="mt-4 pl-4" />
        </div>

        {/* fourth question */}
        <div className="lg:mx-12 mt-12">
          <p className="text-lg">
            <span>4.</span>Which countries have have nuclear power?
            <span className="text-red-700">*</span>
          </p>
          <p className="italic text-gray-500 pl-4 pt-2 text-sm">
            Add description (optional)
          </p>

          <Form {...form}>
            <form className="space-y-8">
              <FormField
                control={form.control}
                name="items"
                render={() => (
                  <FormItem>
                    <div className="grid lg:grid-cols-2 grid-cols-1 ">
                      {all.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="items"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className={`flex rounded-md lg:w-[70%] border ${
                                  item.id === "Option 4"
                                    ? "text-gray-400 italic"
                                    : ""
                                } border-gray-300 p-2 bg-gray-100 justify-between m-1 items-center space-x-2`}
                              >
                                <div>
                                  <FormControl>
                                    <Checkbox
                                      onClick={()=>{handlefour(item.id)}}
                                      checked={field.value?.includes(item.id)}
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm pl-2 font-normal">
                                    {item.label}
                                  </FormLabel>
                                </div>
                                {item.id === "Option 6" ? (
                                  ""
                                ) : (
                                  <FormLabel
                                    onClick={() => {
                                      hanldecancel(item.id);
                                    }}
                                  >
                                    X
                                  </FormLabel>
                                )}
                              </FormItem>
                            );
                          }}
                        />
                      ))}{" "}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
