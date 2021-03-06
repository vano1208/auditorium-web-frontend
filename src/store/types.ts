import {
  FREE_CLASSROOM,
  OCCUPY_CLASSROOM,
  SET_CLASSROOMS,
  SET_CLASSROOMS_FILTER,
  SET_DISABLED_BUTTON,
  SET_IS_FETCHING,
  SET_IS_LOGGED,
  SET_LOGIN_DATA,
  SET_REGISTER,
  SET_UNTIL_VALUE,
  SET_USER_ID_VALUE,
  SET_USERS,
  SET_MODAL_VISIBLE,
  SET_VISIBLE_EDIT_MODE,
  SET_SHOW_USER_POPUP,
} from "./actions";

export enum userTypes {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  POST_GRADUATE = "POST_GRADUATE",
  ADMINISTRATION = "ADMINISTRATION",
  CONCERTMASTER = "CONCERTMASTER",
  ILLUSTRATOR = "ILLUSTRATOR",
  OTHER = "OTHER",
}

export interface User {
  id: number;
  firstName: string;
  patronymic: string;
  lastName: string;
  type: userTypes;
  department: string;
  email: string;
  phoneNumber: string;
  extraPhoneNumbers: string;
}

export interface Me extends User {
  token: string;
  isLogged: boolean;
  visibleEditModal: boolean;
}
export interface Occupied {
  user: User | null;
  until: number;
}

export interface Instrument {
  id: number;
  type: string;
  name: string;
  rate: number;
}

export interface Comment {}

interface Disabled {}

export type ScheduleUnit = {
  user: User;
  from: string;
  to: string;
};

export interface Classroom {
  id: number;
  name: string;
  chair: string | null;
  special: string | null;
  floor: number;
  isWing: boolean;
  description: string;
  occupied: Occupied | null;
  instruments: Array<Instrument>;
  comments: Array<Comment>;
  disabled: Disabled;
  schedule: Array<ScheduleUnit>;
}

export interface RegisterUnit {
  id: number;
  user: {
    lastName: string;
  };
  classroom: {
    name: string;
  };
  start: Date | null;
  end: Date | null;
}

export interface RegisterState {
  register: Array<RegisterUnit>;
}

export interface UsersState {
  users: Array<User>;
}

export interface ClassroomsState {
  classrooms: Array<Classroom>;
  userIdValue: number;
  untilValue: number;
  isFetching: boolean;
  disabledButton: boolean;
  classroomsFilter: string;
  modalVisible: boolean;
}

export interface AuditoriumState {
  showUserPopup: boolean;
}

//Actions

export type SetUsersAction = {
  type: typeof SET_USERS;
  users: Array<User>;
};

export type UsersActions = SetUsersAction;

export type SetIsLoggedAction = {
  type: typeof SET_IS_LOGGED;
  isLogged: boolean;
};

export type SetLoginDataAction = {
  type: typeof SET_LOGIN_DATA;
  data: Me;
};
export type SetVisibleEditModalAction = {
  type: typeof SET_VISIBLE_EDIT_MODE;
  value: boolean;
};

export type AuthActions =
  | SetIsLoggedAction
  | SetLoginDataAction
  | SetVisibleEditModalAction;

export type SetClassroomsAction = {
  type: typeof SET_CLASSROOMS;
  classrooms: Array<Classroom>;
};
export type FreeClassroomAction = {
  type: typeof FREE_CLASSROOM;
  classroomName: string;
};
export type OccupyClassroomAction = {
  type: typeof OCCUPY_CLASSROOM;
  classroomName: string;
  occupied: Occupied | null;
};
export type SetUserIdValueAction = {
  type: typeof SET_USER_ID_VALUE;
  value: number;
};
export type SetUntilValueAction = {
  type: typeof SET_UNTIL_VALUE;
  value: number;
};
export type SetIsFetchingAction = {
  type: typeof SET_IS_FETCHING;
  value: boolean;
};
export type SetDisabledButtonAction = {
  type: typeof SET_DISABLED_BUTTON;
  value: boolean;
};
export type SetClassroomsFilterAction = {
  type: typeof SET_CLASSROOMS_FILTER;
  filter: string;
};

export type SetModalVisibleAction = {
  type: typeof SET_MODAL_VISIBLE;
  value: boolean;
};

export type ClassroomsActions =
  | FreeClassroomAction
  | SetClassroomsAction
  | OccupyClassroomAction
  | SetUserIdValueAction
  | SetUntilValueAction
  | SetIsFetchingAction
  | SetDisabledButtonAction
  | SetClassroomsFilterAction
  | SetModalVisibleAction;

export type SetRegisterAction = {
  type: typeof SET_REGISTER;
  register: Array<RegisterUnit>;
};

export type RegisterActions = SetRegisterAction;

export type SetShowUserPopup = {
  type: typeof SET_SHOW_USER_POPUP;
  isShown: boolean;
};

export type AuditoriumActions = SetShowUserPopup;
