import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const usernamebuttonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Transportation1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-light_green-50 flex flex-col font-roundedmplusc items-center justify-start mx-auto pl-[17px] w-full">
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
          <div className="h-[832px] relative w-[81%] md:w-full">
            <Img
              className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] w-3/5"
              src="images/img_untitleddesign.png"
              alt="untitleddesign"
            />
            <div className="absolute flex flex-col font-sarabun gap-2 justify-start left-[2%] top-[8%] w-[36%]">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-800"
                size="txtSarabunExtraBold36"
              >
                This Week
              </Text>
              <div className="flex flex-row font-roundedmplusc gap-2.5 items-center justify-end md:ml-[0] ml-[77px] w-[79%] md:w-full">
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
              </div>
            </div>
            <Button
              className="common-pointer absolute cursor-pointer font-medium leading-[normal] left-[39%] min-w-[139px] text-[10px] text-center top-[14%]"
              onClick={() => navigate("/dashboardwithwaterusage")}
              shape="round"
            >
              Water Usage
            </Button>
            <div className="absolute bg-blue_gray-100 bottom-[6%] flex flex-col font-roundedmplusc inset-x-[0] items-center justify-start mx-auto p-4 rounded-[20px] w-[29%]">
              <div className="flex flex-col gap-[7px] justify-start mb-[3px] w-[91%] md:w-full">
                <Text
                  className="ml-8 md:ml-[0] text-gray-800 text-xl"
                  size="txtRoundedMplus1cMedium20"
                >
                  Input Your Data
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-pink-100 flex flex-col items-center justify-start p-[15px] rounded-[20px] w-full">
                    <div className="flex flex-col h-[172px] justify-start mb-[13px] w-[172px]">
                      <Text
                        className="md:ml-[0] ml-[21px] text-base text-gray-800"
                        size="txtRoundedMplus1cMedium16"
                      >
                        Transportation
                      </Text>
                      <div className="flex flex-row items-center justify-between mt-[45px] w-full">
                        <div className="flex flex-col h-[45px] items-center justify-start w-[45px]">
                          <Button
                            className="flex h-[45px] items-center justify-center rounded-[20px] w-[45px]"
                            color="red_200"
                            size="sm"
                            variant="outline"
                          >
                            <Img src="images/img_car.svg" alt="car" />
                          </Button>
                        </div>
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_user_red_200.svg"
                          alt="user"
                        />
                        <Img
                          className="h-[45px] w-[45px]"
                          src="images/img_component4.svg"
                          alt="componentFour"
                        />
                      </div>
                      <div className="flex flex-row gap-[17px] items-center justify-center md:ml-[0] ml-[35px] mt-3 w-[63%] md:w-full">
                        <Button
                          className="flex h-[45px] items-center justify-center rounded-[20px] w-[45px]"
                          color="red_200"
                          size="sm"
                          variant="outline"
                        >
                          <Img
                            src="images/img_television.svg"
                            alt="television"
                          />
                        </Button>
                        <Button
                          className="flex h-[45px] items-center justify-center rounded-[20px] w-[45px]"
                          color="red_200"
                          size="sm"
                          variant="outline"
                        >
                          <Img
                            src="images/img_vector_gray_800.svg"
                            alt="vector_One"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between mt-1 w-full">
                    <Text
                      className="bg-pink-100 h-[19px] justify-center pl-[18px] pr-[15px] rounded-[9px] text-[10px] text-black-900 text-center w-[55px]"
                      size="txtRoundedMplus1cRegular10"
                    >
                      Back
                    </Text>
                    <Text
                      className="bg-pink-100 h-[19px] justify-center pl-[18px] pr-[15px] rounded-[9px] text-[10px] text-black-900 text-center w-[55px]"
                      size="txtRoundedMplus1cRegular10"
                    >
                      Save
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-col font-roboto items-center justify-start left-[7%] top-[20%] w-[51%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="h-[233px] sm:h-[484px] relative w-full">
                  <div className="absolute h-[233px] sm:h-[484px] inset-[0] justify-center m-auto w-[99%] sm:w-full">
                    <div className="h-[233px] sm:h-[484px] m-auto w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-evenly m-auto w-full">
                        <div className="md:h-[232px] h-[233px] relative w-full">
                          <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto w-[84%]">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Line className="bg-blue_gray-100 h-[232px] w-px" />
                              <Line className="bg-blue_gray-100 h-[232px] w-px" />
                              <Line className="bg-blue_gray-100 h-[232px] w-px" />
                              <Line className="bg-blue_gray-100 h-[232px] w-px" />
                              <Line className="bg-blue_gray-100 h-[232px] w-px" />
                              <Line className="bg-blue_gray-100 h-[232px] w-px" />
                            </div>
                          </div>
                          <Line className="absolute bg-blue_gray-100 bottom-[19%] h-px inset-x-[0] mx-auto w-full" />
                          <Line className="absolute bg-blue_gray-100 bottom-[39%] h-px inset-x-[0] mx-auto w-full" />
                          <Line className="absolute bg-blue_gray-100 h-px inset-x-[0] mx-auto top-[40%] w-full" />
                          <Line className="absolute bg-blue_gray-100 h-px inset-x-[0] mx-auto top-[20%] w-full" />
                          <Line className="absolute bg-blue_gray-100 h-px inset-x-[0] mx-auto top-[0] w-full" />
                        </div>
                        <Line className="bg-blue_gray-100 h-[232px] sm:h-px sm:w-full w-px" />
                      </div>
                      <Line className="absolute bg-blue_gray-100 h-[232px] inset-y-[0] left-[0] my-auto w-px" />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[12%] flex flex-col h-[162px] inset-x-[0] justify-start mx-auto p-[3px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group52.svg')",
                      }}
                    >
                      <Img
                        className="h-1.5 md:ml-[0] ml-[158px] mr-[327px]"
                        src="images/img_user.svg"
                        alt="user_One"
                      />
                      <Img
                        className="h-1.5 mt-[37px] mx-auto"
                        src="images/img_user.svg"
                        alt="user_Two"
                      />
                      <Img
                        className="h-1.5 mb-7 md:ml-[0] ml-[410px] mr-[75px] mt-[69px]"
                        src="images/img_user.svg"
                        alt="user_Three"
                      />
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[22%] h-1.5 left-[0]"
                    src="images/img_user.svg"
                    alt="user_Four"
                  />
                  <Img
                    className="absolute h-1.5 left-[16%] top-[16%]"
                    src="images/img_user.svg"
                    alt="user_Five"
                  />
                  <Img
                    className="absolute bottom-[10%] h-1.5 right-[33%]"
                    src="images/img_user.svg"
                    alt="user_Six"
                  />
                  <Img
                    className="absolute bottom-[45%] h-1.5 right-[0]"
                    src="images/img_user.svg"
                    alt="user_Seven"
                  />
                </div>
                <div className="h-px relative w-[99%] sm:w-full">
                  <Line className="bg-blue_gray-100 h-px m-auto w-full" />
                  <Line className="absolute bg-blue_gray-100 h-px inset-[0] justify-center m-auto w-full" />
                </div>
                <div className="flex flex-row items-center justify-between mt-1 w-[98%] md:w-full">
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    S
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    M
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    T
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    W
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    T
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    F
                  </Text>
                  <Text
                    className="text-[10px] text-black-900 text-center"
                    size="txtRobotoRegular10"
                  >
                    S
                  </Text>
                </div>
              </div>
            </div>
            <Input
              name="month"
              placeholder="February 11, 2024"
              className="font-medium leading-[normal] p-0 placeholder:text-gray-800 text-left text-xl w-full"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Transportation1Page;
