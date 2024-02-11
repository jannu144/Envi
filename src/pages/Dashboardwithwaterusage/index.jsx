import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const usernamebuttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DashboardwithwaterusagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-light_green-50 flex flex-col items-center justify-start mx-auto pl-[17px] w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1263px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start md:mt-0 mt-[17px]">
            <Text
              className="shadow-bs md:text-5xl text-[64px] text-green-400"
              size="txtGlutenBold64"
            >
              Envi
            </Text>
            <SelectBox
              className="font-roundedmplusc leading-[normal] mt-[54px] text-base text-left w-[97%] sm:w-full"
              placeholderClassName="text-black-900"
              indicator={
                <Img
                  className="h-[7px] mr-[0] w-3"
                  src="images/img_arrowdown.svg"
                  alt="arrow_down"
                />
              }
              isSearchable={false}
              placeholder="pedroduck"
              getOptionLabel={(e) => (
                <div className="flex items-center">
                  <Img
                    className="h-[29px] mr-[5px] w-[29px]"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <span>{e.label}</span>
                </div>
              )}
              name="usernamebutton"
              isMulti={false}
              options={usernamebuttonOptionsList}
              shape="round"
              color="light_green_300"
            />
            <div className="flex flex-col font-roundedmplusc items-center justify-start mt-20 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Input
                    name="groupOne"
                    placeholder="This Week"
                    className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid flex w-full"
                    prefix={
                      <div className="mr-3 w-[29px] bg-gray-900">
                        <Img
                          className="my-auto"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                      </div>
                    }
                    shape="round"
                  ></Input>
                </div>
              </div>
              <Input
                name="thismonthbutton"
                placeholder="This Month"
                className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                wrapClassName="border border-light_green-50 border-solid flex mt-[9px] w-full"
                prefix={
                  <div className="mr-3 w-[30px] bg-gray-900">
                    <Img
                      className="my-auto"
                      src="images/img_calendar_gray_900.svg"
                      alt="calendar"
                    />
                  </div>
                }
                shape="round"
              ></Input>
              <Input
                name="analyticsbutton"
                placeholder="Analytics"
                className="leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                wrapClassName="border border-light_green-50 border-solid flex mt-[11px] w-full"
                prefix={
                  <div className="mr-[13px] w-[30px] bg-gray-900">
                    <Img
                      className="my-auto"
                      src="images/img_vector.svg"
                      alt="Vector"
                    />
                  </div>
                }
                shape="round"
              ></Input>
            </div>
          </div>
          <Line className="bg-blue_gray-100 md:h-0.5 h-[832px] w-0.5 md:w-full" />
          <div className="h-[832px] sm:h-[975px] relative w-[81%] md:w-full">
            <div className="absolute bottom-[6%] flex flex-col font-roundedmplusc items-center justify-start left-[7%] w-[57%]">
              <div className="flex flex-col gap-12 justify-start w-full">
                <div className="flex flex-col gap-[30px] items-center justify-start mr-[52px] w-[91%] md:w-full">
                  <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-start w-[85%] md:w-full">
                    <Button
                      className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[139px] text-[10px] text-center"
                      onClick={() => navigate("/")}
                      shape="round"
                      color="pink_100"
                    >
                      Transportation
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[139px] text-[10px] text-center"
                      onClick={() => navigate("/dashboardwithgeneralwaste")}
                      shape="round"
                      color="lime_200"
                    >
                      General Waste
                    </Button>
                    <div className="bg-teal-100 flex flex-col items-start justify-end p-0.5 rounded-[10px]">
                      <Text
                        className="md:ml-[0] ml-[34px] text-[10px] text-gray-800"
                        size="txtRoundedMplus1cMedium10"
                      >
                        Water Usage
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col font-roboto items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[233px] sm:h-[484px] relative w-full">
                        <div className="absolute h-[233px] sm:h-[484px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                          <div className="h-[233px] sm:h-[484px] m-auto w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-evenly m-auto w-full">
                              <div className="md:h-[232px] h-[233px] relative w-full">
                                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[84%]">
                                  <div className="flex flex-row items-center justify-between w-full">
                                    <Line className="bg-gray-300 h-[232px] w-px" />
                                    <Line className="bg-gray-300 h-[232px] w-px" />
                                    <Line className="bg-gray-300 h-[232px] w-px" />
                                    <Line className="bg-gray-300 h-[232px] w-px" />
                                    <Line className="bg-gray-300 h-[232px] w-px" />
                                    <Line className="bg-gray-300 h-[232px] w-px" />
                                  </div>
                                </div>
                                <Line className="absolute bg-gray-300 bottom-[13%] h-px inset-x-[0] mx-auto w-full" />
                                <Line className="absolute bg-gray-300 bottom-[28%] h-px inset-x-[0] mx-auto w-full" />
                                <Line className="absolute bg-gray-300 bottom-[42%] h-px inset-x-[0] mx-auto w-full" />
                                <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[43%] w-full" />
                                <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[29%] w-full" />
                                <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[15%] w-full" />
                                <Line className="absolute bg-gray-300 h-px inset-x-[0] mx-auto top-[0] w-full" />
                              </div>
                              <Line className="bg-gray-300 h-[232px] sm:h-px sm:w-full w-px" />
                            </div>
                            <Line className="absolute bg-gray-300 h-[232px] inset-y-[0] left-[0] my-auto w-px" />
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[182px] inset-x-[0] justify-start mx-auto p-[29px] sm:px-5 top-[7%] w-full"
                            style={{
                              backgroundImage: "url('images/img_group19.svg')",
                            }}
                          >
                            <Img
                              className="h-1.5 md:ml-[0] ml-[389px] mr-[50px]"
                              src="images/img_inbox.svg"
                              alt="inbox"
                            />
                            <Img
                              className="h-1.5 mt-[43px] mx-auto"
                              src="images/img_inbox.svg"
                              alt="inbox_One"
                            />
                            <Img
                              className="h-1.5 mb-[49px] md:ml-[0] ml-[134px] mr-[305px] mt-[9px]"
                              src="images/img_inbox.svg"
                              alt="inbox_Two"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute h-1.5 left-[0] top-[20%]"
                          src="images/img_inbox.svg"
                          alt="inbox_Three"
                        />
                        <Img
                          className="absolute bottom-[12%] h-1.5 left-[16%]"
                          src="images/img_inbox.svg"
                          alt="inbox_Four"
                        />
                        <Img
                          className="absolute h-1.5 right-[33%] top-[6%]"
                          src="images/img_inbox.svg"
                          alt="inbox_Five"
                        />
                        <Img
                          className="absolute bottom-[41%] h-1.5 right-[0]"
                          src="images/img_inbox.svg"
                          alt="inbox_Six"
                        />
                      </div>
                      <div className="h-px relative w-[99%] sm:w-full">
                        <Line className="bg-gray-300 h-px m-auto w-full" />
                        <Line className="absolute bg-gray-300 h-px inset-[0] justify-center m-auto w-full" />
                      </div>
                      <div className="flex flex-row items-center justify-between mt-1 w-[98%] md:w-full">
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          S
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          M
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          W
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          T
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          F
                        </Text>
                        <Text
                          className="text-center text-gray-900 text-xs"
                          size="txtRobotoRegular12"
                        >
                          S
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-100 flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[280px] p-4 rounded-[20px] w-[51%] md:w-full">
                  <Text
                    className="text-gray-800 text-xl"
                    size="txtRoundedMplus1cMedium20"
                  >
                    Input Your Data
                  </Text>
                  <div className="flex flex-col gap-4 items-center justify-start mb-4 w-[92%] md:w-full">
                    <Button
                      className="common-pointer cursor-pointer leading-[normal] min-w-[232px] rounded-[20px] text-base text-center"
                      onClick={() => navigate("/transportation1")}
                      color="pink_100"
                      size="md"
                    >
                      Transportation
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer leading-[normal] min-w-[234px] rounded-[20px] text-base text-center"
                      onClick={() => navigate("/generalwaste")}
                      color="lime_200"
                      size="md"
                    >
                      General Waste
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer leading-[normal] min-w-[234px] rounded-[20px] text-base text-center"
                      onClick={() => navigate("/waterusage")}
                      size="md"
                    >
                      Water Usage
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Input
              name="month"
              placeholder="February 11, 2024"
              className="font-medium font-roundedmplusc leading-[normal] p-0 placeholder:text-gray-800 text-left text-xl w-full"
              wrapClassName="absolute bottom-[37%] left-[0] rounded-[15px] w-[32%]"
              color="light_green_300"
              size="md"
            ></Input>
            <Text
              className="absolute bottom-[30%] left-[1%] text-[15px] text-black-900"
              size="txtRoundedMplus1cRegular15"
            >
              f
            </Text>
            <div className="absolute bg-blue_gray-100 bottom-[6%] flex flex-col font-roundedmplusc items-center justify-start left-[0] p-[9px] rounded-[20px] w-[32%]">
              <div className="flex flex-col gap-9 items-center justify-start w-[89%] md:w-full">
                <Text
                  className="text-base text-center text-gray-800 w-[82%] sm:w-full"
                  size="txtRoundedMplus1cMedium16"
                >
                  Finish one or both the missions to get a reward!
                </Text>
                <div className="flex flex-row gap-[29px] items-start justify-between w-full">
                  <div className="flex flex-col gap-[53px] justify-start mt-4">
                    <Text
                      className="text-[15px] text-black-900"
                      size="txtRoundedMplus1cRegular15"
                    >
                      Shop for natural products
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[13px] text-[15px] text-black-900"
                      size="txtRoundedMplus1cRegular15"
                    >
                      Try growing a plant
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[57px] items-start justify-start p-[17px] rounded-[5px] w-[22%]">
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[3px] w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icons.svg"
                        alt="icons"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start mb-4 md:ml-[0] ml-[3px] w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_icons.svg"
                        alt="icons_One"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] w-3/5"
              src="images/img_untitleddesign.png"
              alt="untitleddesign"
            />
            <Text
              className="absolute left-[2%] text-4xl sm:text-[32px] md:text-[34px] text-gray-800 top-[8%]"
              size="txtSarabunExtraBold36"
            >
              This Week
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardwithwaterusagePage;
