import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

import { CloseSVG } from "../../assets/images";

const SettingsLogoutPage = () => {
  const navigate = useNavigate();

  const [settingsbuttonvalue, setSettingsbuttonvalue] = React.useState("");

  return (
    <>
      <div className="bg-light_green-50 flex sm:flex-col md:flex-col flex-row font-roundedmplusc gap-[37px] items-center mx-auto pl-[17px] w-full">
        <div className="flex flex-row gap-[23px] items-start justify-between md:px-5 w-[17%] md:w-full">
          <div className="flex flex-col items-center justify-start mt-[17px]">
            <Text
              className="shadow-bs md:text-5xl text-[64px] text-green-400"
              size="txtGlutenBold64"
            >
              Envi
            </Text>
            <Input
              name="usernamebutton"
              placeholder="pedroduck"
              className="!placeholder:text-black-900 !text-black-900 font-roundedmplusc leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="flex mt-[54px] rounded-[10px] w-[97%]"
              prefix={
                <div className="h-[29px] mr-[5px] w-[29px] bg-black-900">
                  <Img
                    className="h-[29px] my-auto"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                </div>
              }
              suffix={
                <div className="mt-[13px] mb-2 ml-[26px] sm:w-full sm:mx-0 w-[7%] bg-gray-900">
                  <Img
                    className="my-auto"
                    src="images/img_arrowup.svg"
                    alt="arrow_up"
                  />
                </div>
              }
              color="light_green_300"
              size="md"
            ></Input>
            <div className="flex flex-col font-roundedmplusc gap-[7px] items-center justify-start mt-2 w-[65%] md:w-full">
              <Input
                name="settingsbutton"
                placeholder="Settings"
                value={settingsbuttonvalue}
                onChange={(e) => setSettingsbuttonvalue(e)}
                className="!placeholder:text-black-900 !text-black-900 leading-[normal] p-0 text-left text-xs w-full"
                wrapClassName="flex rounded-[10px] w-full"
                prefix={
                  <div className="mr-[9px] w-3.5 bg-gray-900 my-0.5">
                    <Img
                      className="cursor-pointer my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                }
                suffix={
                  <CloseSVG
                    fillColor="#000000"
                    className="cursor-pointer my-auto"
                    onClick={() => setSettingsbuttonvalue("")}
                    style={{
                      visibility:
                        settingsbuttonvalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={13}
                    width={14}
                    viewBox="0 0 14 13"
                  />
                }
                color="light_green_300"
                size="xs"
              ></Input>
              <div className="bg-light_green-300 flex flex-row gap-[9px] items-center justify-start pt-0.5 px-0.5 rounded-[10px] w-full">
                <Img
                  className="h-3 ml-[7px] w-[13px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <a href="javascript:" className="text-black-900 text-xs">
                  <Text size="txtRoundedMplus1cRegular12">Logout</Text>
                </a>
              </div>
            </div>
            <div className="flex flex-col font-roundedmplusc items-center justify-start mt-[25px] w-full">
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
          <Line className="bg-blue_gray-100 h-[832px] w-0.5" />
        </div>
        <div className="h-[832px] sm:h-[915px] md:px-5 relative w-[81%] md:w-full">
          <div className="flex flex-row gap-2.5 h-full items-center justify-center ml-[98px] mt-[119px] w-[29%]">
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
          <div className="absolute h-[832px] sm:h-[915px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bottom-[6%] flex flex-col font-roundedmplusc items-center justify-start left-[7%] w-[56%]">
              <div className="flex flex-col gap-[51px] justify-start w-full">
                <div className="flex flex-col gap-[30px] justify-start mr-[52px] w-[91%] md:w-full">
                  <Button
                    className="common-pointer cursor-pointer font-medium leading-[normal] min-w-[139px] md:ml-[0] ml-[321px] mr-[49px] text-[10px] text-center"
                    onClick={() => navigate("/dashboardwithwaterusage")}
                    shape="round"
                  >
                    Water Usage
                  </Button>
                  <div className="flex flex-col font-roboto items-center justify-start w-full">
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
                              alt="user"
                            />
                            <Img
                              className="h-1.5 mt-[37px] mx-auto"
                              src="images/img_user.svg"
                              alt="user_One"
                            />
                            <Img
                              className="h-1.5 mb-7 md:ml-[0] ml-[410px] mr-[75px] mt-[69px]"
                              src="images/img_user.svg"
                              alt="user_Two"
                            />
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[22%] h-1.5 left-[0]"
                          src="images/img_user.svg"
                          alt="user_Three"
                        />
                        <Img
                          className="absolute h-1.5 left-[16%] top-[16%]"
                          src="images/img_user.svg"
                          alt="user_Four"
                        />
                        <Img
                          className="absolute bottom-[10%] h-1.5 right-[33%]"
                          src="images/img_user.svg"
                          alt="user_Five"
                        />
                        <Img
                          className="absolute bottom-[45%] h-1.5 right-[0]"
                          src="images/img_user.svg"
                          alt="user_Six"
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
                </div>
                <div className="bg-blue_gray-100 flex flex-col gap-[25px] items-center justify-start md:ml-[0] ml-[273px] p-4 rounded-[20px] w-[52%] md:w-full">
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
            <Text
              className="absolute left-[2%] text-4xl sm:text-[32px] md:text-[34px] text-gray-800 top-[8%]"
              size="txtSarabunExtraBold36"
            >
              This Week
            </Text>
            <Img
              className="absolute h-[832px] inset-y-[0] my-auto object-cover right-[0] w-3/5"
              src="images/img_untitleddesign.png"
              alt="untitleddesign"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsLogoutPage;
