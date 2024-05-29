import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormInput from "../../ui/FormInput";
import JsonTemplate from "../../ui/JsonTemplate";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addGame } from "../../services/apiGames";
import toast from "react-hot-toast";
import { useRef } from "react";

function AddGameForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const queryClient = useQueryClient();
  const { errors } = formState;
  const ref = useRef(null);

  const { isLoading, mutate } = useMutation({
    mutationFn: addGame,
    onSuccess: () => {
      toast.success("Game successfully added");
      queryClient.invalidateQueries({
        queryKey: ["games"],
      }),
        reset();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  function onSubmit(data) {
    mutate(data);
  }

  function clickHandler(message) {
    toast((t) => (
      <p>
        <span>{`Sure you want to ${message}?`}</span>
        <span className="flex justify-around mt-2">
          <Button
            variant="primary"
            clickHandler={() => {
              toast.dismiss(t.id);
              message === "submit" && ref.current.requestSubmit();
              message === "reset" && reset();
            }}
          >
            Yes
          </Button>
          <Button
            variant="primary"
            clickHandler={() => {
              toast.dismiss(t.id);
            }}
          >
            No
          </Button>
        </span>
      </p>
    ));
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 mb-8"
      ref={ref}
    >
      <header className="flex justify-center font-secondary text-2xl font-semibold">
        <h2>Add new game to database</h2>
      </header>
      <FormInput
        rowID="gameName"
        inputType="text"
        isLoading={isLoading}
        error={errors?.gameName?.message}
        register={{
          ...register("gameName", {
            required: "This field is required",
          }),
        }}
      >
        Game name
      </FormInput>
      <FormInput
        rowID="gameDesigner"
        inputType="text"
        isLoading={isLoading}
        error={errors?.gameDesigner?.message}
        register={{
          ...register("gameDesigner", {
            required: "This field is required",
          }),
        }}
      >
        Game designer
      </FormInput>
      <FormInput
        rowID="releaseYear"
        inputType="number"
        isLoading={isLoading}
        error={errors?.releaseYear?.message}
        register={{
          ...register("releaseYear", {
            required: "This field is required",
          }),
        }}
      >
        Released, year (YYYY)
      </FormInput>
      <FormInput
        rowID="playerCountFrom"
        inputType="number"
        isLoading={isLoading}
        error={errors?.playerCountFrom?.message}
        register={{
          ...register("playerCountFrom", {
            required: "This field is required",
          }),
        }}
      >
        Player count, from
      </FormInput>
      <FormInput
        rowID="playerCountTo"
        inputType="number"
        isLoading={isLoading}
        error={errors?.playerCountTo?.message}
        register={{
          ...register("playerCountTo", {
            required: "This field is required",
          }),
        }}
      >
        Player count, to
      </FormInput>
      <FormInput
        rowID="bestPlayerCountFrom"
        inputType="number"
        isLoading={isLoading}
        error={errors?.bestPlayerCountFrom?.message}
        register={{
          ...register("bestPlayerCountFrom", {
            required: "This field is required",
          }),
        }}
      >
        Best player count, from
      </FormInput>
      <FormInput
        rowID="bestPlayerCountTo"
        inputType="number"
        isLoading={isLoading}
        error={errors?.bestPlayerCountTo?.message}
        register={{
          ...register("bestPlayerCountTo", {
            required: "This field is required",
          }),
        }}
      >
        Best player count, to
      </FormInput>
      <FormInput
        rowID="bggLink"
        inputType="url"
        isLoading={isLoading}
        error={errors?.bggLink?.message}
        register={{
          ...register("bggLink", {
            required: "This field is required",
          }),
        }}
      >
        Link to BGG page
      </FormInput>
      <FormInput
        rowID="rulesLink"
        inputType="url"
        isLoading={isLoading}
        error={errors?.rulesLink?.message}
        register={{
          ...register("rulesLink", {
            required: "This field is required",
          }),
        }}
      >
        Link to rules
      </FormInput>
      <FormInput
        error={errors?.capitalization?.message}
        label="Capitalization"
        inputType="radio"
      >
        <div className="flex justify-around mr-6 ml-6">
          <div>
            <label>Full</label>
            <input
              className="mr-4 bg-zinc-200 w-6"
              value="fullCap"
              disabled={isLoading}
              name="capitalization"
              type="radio"
              {...register("capitalization", {
                required: "This field is required",
              })}
            ></input>
          </div>
          <div>
            <label>Incremental</label>
            <input
              className="mr-4 bg-zinc-200 w-6"
              value="incrementalCap"
              disabled={isLoading}
              name="capitalization"
              type="radio"
              {...register("capitalization", {
                required: "This field is required",
              })}
            ></input>
          </div>
        </div>
      </FormInput>
      <FormInput
        rowID="bankSize"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.bankSize?.message}
        register={{
          ...register("bankSize", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Bank size (INT or JSON)
      </FormInput>
      <FormInput
        rowID="currencySymbol"
        inputType="text"
        isLoading={isLoading}
        error={errors?.currencySymbol?.message}
        register={{
          ...register("currencySymbol", {
            required: "This field is required",
          }),
        }}
      >
        Currency Symbol
      </FormInput>
      <FormInput
        rowID="certLimitJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.certLimit?.message}
        register={{
          ...register("certLimitJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Cert limit, per player count
      </FormInput>{" "}
      <JsonTemplate>
        &#123;
        <br /> 2: 32,
        <br /> 3: 21,
        <br /> 4: 16
        <br /> &#125;
      </JsonTemplate>
      <FormInput
        rowID="startingMoneyJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.certLimit?.message}
        register={{
          ...register("startingMoneyJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Starting capital, per player count
      </FormInput>{" "}
      <JsonTemplate>
        &#123;
        <br /> 2: 1200,
        <br /> 3: 800,
        <br /> 4: 600,
        <br /> 5: 480,
        <br /> 6: 400,
        <br /> &#125;
      </JsonTemplate>
      <FormInput
        rowID="privatesJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.privatesJSON?.message}
        register={{
          ...register("privatesJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Privates, in JSON
      </FormInput>
      <JsonTemplate>
        &#123; name: &#34;Champlain & St.Lawrence&#34;, <br />
        sym: &#34;CS&#34;, <br />
        value: 40, <br />
        revenue: 10, <br />
        desc: &#34;A corporation owning the CS may lay a tile on the CS's hex
        even if this hex is not connected to the corporation's track. This free
        tile placement is in addition to the corporation's normal tile
        placement. Blocks B20 while owned by a player.&#34; <br />
        abilities: [&#123; <br />
        type: &#34;blocks_hexes&#34;, <br />
        owner_type: &#34;player&#34;, <br />
        hexes: [&#34;B20&#34;] <br />
        &#125;, <br />
        &#123; type: &#34;tile_lay&#34;, <br />
        owner_type: &#34;corporation&#34;, <br />
        hexes: [&#34;B20&#34;], <br />
        tiles: %w[3 4 58], <br />
        when: &#34;owning_corp_or_turn&#34;, count: <br />
        1, &#125;],
        <br />
        color: nil, <br />
        &#125;,
      </JsonTemplate>{" "}
      <FormInput
        rowID="minorsJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.minorsJSON?.message}
        register={{
          ...register("minorsJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Minors, in JSON
      </FormInput>
      <JsonTemplate>
        [ &#123; <br />
        &#34;sym&#34;:&#34;MS&#34;, <br />
        &#34;name&#34;:&#34;Michigan Southern&#34;, <br />
        &#34;logo&#34;:&#34;1846/MS&#34;, <br />
        &#34;simple_logo&#34;:&#34;1846/MS.alt&#34;, <br />
        &#34;tokens&#34;:[ 0 ], <br />
        &#34;coordinates&#34;:&#34;C15&#34;, <br />
        &#34;color&#34;:&#34;pink&#34;, <br />
        &#34;text_color&#34;:&#34;black&#34; <br />
        &#125;, <br />]
      </JsonTemplate>
      <div className="ml-12 flex justify-center gap-4"></div>
      <FormInput
        rowID="companiesJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.companiesJSON?.message}
        register={{
          ...register("companiesJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Major companies, in JSON
      </FormInput>
      <JsonTemplate>
        &#123;
        <br />
        &#123; float_percent: 60, <br />
        sym: &#34;PRR&#34;, <br />
        name: &#34;Pennsylvania Railroad&#34;, <br />
        logo: &#34;18_chesapeake/PRR&#34;, <br />
        simple_logo: &#34;1830/PRR.alt&#34;, <br />
        tokens: [0, 40, 100, 100], <br />
        coordinates: &#34;H12&#34;, <br />
        color: &#34;#32763f&#34;, <br />
        &#125;, <br />
        &#125;
      </JsonTemplate>
      <FormInput
        rowID="phasesJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.phasesJSON?.message}
        register={{
          ...register("phasesJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Game phases, in JSON
      </FormInput>
      <JsonTemplate>
        &#123; <br />
        &#123; name: &#34;4&#34;, <br />
        on: &#34;4&#34;, <br />
        train_limit: 3, <br />
        tiles: %i[yellow green], <br />
        operating_rounds: 2, <br />
        status: [&#34;can_buy_companies&#34;], <br />
        &#125;, <br />
        &#125;
      </JsonTemplate>
      <FormInput
        rowID="trainsJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.trainsJSON?.message}
        register={{
          ...register("trainsJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Train marked, in JSON
      </FormInput>
      <JsonTemplate>
        &#123;
        <br />
        name: &#34;D&#34;, distance: 999, price: 1100, num: 20, available_on:
        &#34;6&#34;, discount: &#123; &#34;4&#34; =&gt; 300, &#34;5&#34; =&gt;
        300, &#34;6&#34; =&gt; 300 &#125;, &#125; <br /> &#125;
      </JsonTemplate>
      <FormInput
        rowID="marketJSON"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.marketJSON?.message}
        register={{
          ...register("marketJSON", {
            required: "This field is required",
            setValueAs: (v) => {
              try {
                return JSON.parse(v);
              } catch (er) {
                return v;
              }
            },
          }),
        }}
      >
        Market configuration, in JSON
      </FormInput>
      <JsonTemplate>
        &#123; <br />
        [[60y, 67, 71, 76, 82, 90, 100p, 112, 126, 142, 160, 180, 200, 225, 250,
        275, 300, 325, 350], [53y, 60y, 66, 70, 76, 82, 90p, 100, 112, 126, 142,
        160, 180, 200, 220, 240, 260, 280, 300], ], <br />
        &#125;
      </JsonTemplate>
      <FormInput
        rowID="mcGuffins"
        inputType="textArea"
        isLoading={isLoading}
        error={errors?.mcGuffins?.message}
        register={{
          ...register("mcGuffins", {
            required: "This field is required",
          }),
        }}
      >
        Special features
      </FormInput>
      <p className="flex justify-between mr-40">
        <Button
          variant="primary"
          type="button"
          disabled={isLoading}
          clickHandler={() => clickHandler("reset")}
        >
          Reset form
        </Button>
        <Button
          variant="primary"
          type="button"
          clickHandler={() => clickHandler("submit")}
          disabled={isLoading}
        >
          Submit new game
        </Button>
      </p>
    </form>
  );
}

export default AddGameForm;

// re.sub("(\w+):", r'"\1":',  data)

// {
//   setValueAs: (v) => JSON.parse(v),
// }
